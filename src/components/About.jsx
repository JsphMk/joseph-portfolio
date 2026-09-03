import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, stack }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
        
        <div className='flex flex-row flex-wrap justify-center gap-4'>
          {stack.map((technology) => (
            <div className='w-8 h-8' key={technology.name}>
              <img
                src={technology.icon}
                alt='web-development'
                className='w-8 h-8 object-contain'
                title={technology.name}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a Senior Software Engineer with 5+ years of experience delivering
        scalable web and cross-platform mobile applications using Angular,
        Flutter, C#, .NET, PHP and TypeScript. I design RESTful APIs, build
        white-label products, automate delivery with CI/CD and guide releases
        through UAT and production. I work closely with clients and stakeholders,
        lead and mentor engineers, and improve application security through VAPT
        remediation. I also use Claude, OpenAI Codex and self-hosted LLMs for
        software development, research, debugging and workflow automation.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
