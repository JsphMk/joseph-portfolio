import { readFile, writeFile } from "node:fs/promises";

// Keep the editable glTF sources, but serve a single file per model so buffers
// and textures cannot fail as separate relative-URL requests.
for (const name of ["desktop_pc", "planet"]) {
  const folder = new URL(`../public/${name}/`, import.meta.url);
  const model = JSON.parse(await readFile(new URL("scene.gltf", folder), "utf8"));
  if (model.buffers.length !== 1) throw new Error(`${name}: expected one source buffer`);

  const geometry = await readFile(new URL(model.buffers[0].uri, folder));
  if (geometry.length !== model.buffers[0].byteLength) {
    throw new Error(`${name}: incomplete geometry buffer`);
  }

  const chunks = [];
  let byteLength = 0;
  const append = (bytes) => {
    const offset = byteLength;
    const padding = Buffer.alloc((4 - bytes.length % 4) % 4);
    chunks.push(bytes, padding);
    byteLength += bytes.length + padding.length;
    return offset;
  };
  append(geometry);

  for (const image of model.images ?? []) {
    if (!image.uri) continue;
    const bytes = await readFile(new URL(image.uri, folder));
    const mimeType = /\.png$/i.test(image.uri) ? "image/png"
      : /\.jpe?g$/i.test(image.uri) ? "image/jpeg" : null;
    if (!mimeType) throw new Error(`${name}: unsupported image ${image.uri}`);
    image.bufferView = model.bufferViews.length;
    image.mimeType = mimeType;
    model.bufferViews.push({ buffer: 0, byteOffset: append(bytes), byteLength: bytes.length });
    delete image.uri;
  }
  model.buffers = [{ byteLength }];

  const json = Buffer.from(JSON.stringify(model));
  const jsonChunk = Buffer.concat([json, Buffer.alloc((4 - json.length % 4) % 4, 0x20)]);
  const binaryChunk = Buffer.concat(chunks);
  const header = Buffer.alloc(20);
  header.writeUInt32LE(0x46546c67, 0); // glTF magic
  header.writeUInt32LE(2, 4);
  header.writeUInt32LE(28 + jsonChunk.length + binaryChunk.length, 8);
  header.writeUInt32LE(jsonChunk.length, 12);
  header.writeUInt32LE(0x4e4f534a, 16); // JSON chunk
  const binaryHeader = Buffer.alloc(8);
  binaryHeader.writeUInt32LE(binaryChunk.length, 0);
  binaryHeader.writeUInt32LE(0x004e4942, 4); // BIN chunk
  await writeFile(new URL("scene.glb", folder), Buffer.concat([header, jsonChunk, binaryHeader, binaryChunk]));
  console.log(`Packed ${name}: ${binaryChunk.length.toLocaleString()} bytes, ${model.images.length} embedded textures`);
}
