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
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] grid grid-rows-[64px_60px_1fr] gap-4 justify-items-center'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='flex items-center justify-center text-white text-[20px] leading-[30px] font-bold text-center'>
          {title}
        </h3>
        
        <div className='flex w-full flex-row flex-wrap content-start justify-center gap-4'>
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

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 space-y-6 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        <p>
          I am a Singapore-based Senior Software Engineer with 5+ years of experience delivering scalable web and cross-platform mobile applications across enterprise and client-facing environments. My core expertise includes Angular, Flutter, C#, .NET, PHP, and TypeScript, with hands-on experience designing RESTful APIs, building white-label products, and developing applications used across web, Android, and iOS platforms.
        </p>
        <p>
          I manage the full software delivery lifecycle, from requirement analysis and solution design through development, CI/CD automation, UAT, production deployment, and post-release support. I work closely with clients, stakeholders, and cross-functional teams to clarify requirements, manage expectations, communicate delivery timelines, and ensure solutions are practical, maintainable, and aligned with business needs.
        </p>
        <p>
          In addition to hands-on development, I have experience leading and mentoring engineers, improving application performance and reliability, managing App Store and Google Play releases, and strengthening application security through VAPT remediation across web, mobile, and API components. I also actively incorporate modern AI tools such as Claude, OpenAI Codex, and self-hosted LLMs into software development, technical research, debugging, code analysis, and workflow automation, while continuously exploring new AI-assisted engineering practices.
        </p>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
