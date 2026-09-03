import React from "react";
import { motion } from "framer-motion";

import { education, languages } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Education = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Education & recognition</p>
      <h2 className={styles.sectionHeadText}>Foundations.</h2>
    </motion.div>

    <div className='mt-12 grid gap-6 md:grid-cols-2'>
      {education.map((item, index) => (
        <motion.article
          key={item.qualification}
          variants={fadeIn("up", "spring", index * 0.2, 0.75)}
          className='rounded-2xl border border-[#2f2a55] bg-tertiary p-6 shadow-card sm:p-8'
        >
          <p className='text-[14px] font-semibold uppercase tracking-wider text-[#aaa6c3]'>
            {item.period}
          </p>
          <h3 className='mt-3 text-[22px] font-bold text-white sm:text-[24px]'>
            {item.qualification}
          </h3>
          <p className='mt-2 text-[16px] text-secondary'>{item.institution}</p>
          <div className='mt-5 flex flex-wrap gap-2'>
            {item.highlights.map((highlight) => (
              <span
                key={highlight}
                className='rounded-full bg-[#241d48] px-3 py-2 text-[13px] font-medium text-white-100'
              >
                {highlight}
              </span>
            ))}
          </div>
        </motion.article>
      ))}
    </div>

    <div className='mt-10 flex flex-wrap items-center gap-3'>
      <p className='mr-2 text-[15px] font-semibold uppercase tracking-wider text-secondary'>
        Languages
      </p>
      {languages.map((language) => (
        <span
          key={language}
          className='rounded-full border border-[#915EFF]/50 px-4 py-2 text-[14px] text-white-100'
        >
          {language}
        </span>
      ))}
    </div>
  </>
);

export default SectionWrapper(Education, "education");
