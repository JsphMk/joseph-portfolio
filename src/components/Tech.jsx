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

      <div className='mt-12 flex flex-row flex-wrap justify-center gap-8 sm:gap-10'>
        {technologies.map((technology) => (
          <div className='flex w-28 flex-col items-center gap-3' key={technology.name}>
            <div className='h-24 w-24 sm:h-28 sm:w-28'>
              <BallCanvas icon={technology.icon} />
            </div>
            <p className='text-center text-[14px] font-medium text-white-100'>
              {technology.name}
            </p>
          </div>
        ))}
      </div>

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
