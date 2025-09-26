import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const AboutMe = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const textControls = useAnimation();
  const imageControls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      textControls.start({ opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut' } });
      imageControls.start({ opacity: 1, x: 0, transition: { duration: 1.2, ease: 'easeOut' } });
    }
  }, [inView, textControls, imageControls]);

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col lg:flex-row bg-black text-white overflow-hidden"
    >
      {/* Left Text Section */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-20 space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={textControls}
      >
        <h3 className="text-cyan-400 text-lg tracking-widest uppercase font-semibold mb-0">More About Me</h3>
        <h2 className="text-4xl sm:text-5xl uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
          Yuraj Thomare
        </h2>
        <p className="text-gray-400 text-base sm:text-lg font-mono">
          I'm a passionate Computer Science student from Dr. Babasaheb Ambedkar Marathwada University, dedicated to mastering Java and full-stack development. My journey began with a curiosity for coding, which evolved into a deep expertise in building scalable, secure, and efficient applications using Java, Spring Boot, and modern DevOps tools.
        </p>
        <p className="text-gray-400 text-base sm:text-lg font-mono">
          I thrive on solving complex problems and have hands-on experience developing a full-stack LIC Agent Web Application, integrating REST APIs, Spring Security with JWT, and React.js for a seamless user experience. My strong analytical skills and attention to detail drive me to create robust solutions that meet real-world needs.
        </p>
        <p className="text-gray-400 text-base sm:text-lg font-mono">
          Beyond coding, I value teamwork and clear communication, which I honed through academic projects and collaborative environments. I'm always eager to learn new technologies and contribute to innovative projects that push the boundaries of software development.
        </p>
        {/* Social Icons */}
        <div className="flex space-x-6 mt-4">
          <a href="https://github.com/YuvrajThombre" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-purple-500 text-2xl transition duration-300">
            <FaGithub />
          </a>
          <a href="www.linkedin.com/in/yuvraj-thombre-42151b328" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-purple-500 text-2xl transition duration-300">
            <FaLinkedin />
          </a>
          <a href="mailto:yuvrajthombre85@gmail.com" className="text-cyan-400 hover:text-purple-500 text-2xl transition duration-300">
            <FaEnvelope />
          </a>
        </div>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        className="w-full lg:w-1/2 h-[400px] lg:h-auto relative"
        initial={{ opacity: 0, x: 50 }}
        animate={imageControls}
      >
        <img
          src="/path-to-your-image.jpg"
          alt="Yuvraj Thombre"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => (e.target.src = 'https://i.ibb.co/6cyxvJcG/hero2.jpg')}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-10 mix-blend-screen"></div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
