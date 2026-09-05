import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { additionalSkills, technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <p className={styles.sectionSubText}>Technical toolkit</p>
      <h2 className={styles.sectionHeadText}>Core Expertise.</h2>

      <BallCanvas technologies={technologies} />

      <div className='mt-12 flex flex-wrap justify-center gap-3'>
        {additionalSkills.map((skill) => (
          <span
            key={skill}
            className='rounded-full border border-[#2f2a55] bg-tertiary px-4 py-2 text-[14px] text-secondary'
          >
            {skill}
          </span>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
