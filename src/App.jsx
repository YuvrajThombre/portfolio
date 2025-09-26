import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './component/HeroSection';
import EducationSkills from './component/EducationSkills';
import AboutMe from './component/Aboutme';
import WorkExperience from './component/WorkExperience';


const App = () => {
  const particleVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: {
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      x: () => Math.random() * 200 - 100,
      y: () => Math.random() * 200 - 100,
      transition: { duration: 3, repeat: Infinity, repeatType: 'loop' },
    },
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen relative overflow-hidden">
      {/* Particle Effects and Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full blur-sm"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            variants={particleVariants}
            initial="initial"
            animate="animate"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-800/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <WorkExperience />
        <EducationSkills />
      
        <AboutMe />
      </div>
    </div>
  );
};

export default App;