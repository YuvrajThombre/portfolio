import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const EducationSkills = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.3 },
      });
    }
  }, [inView, controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  const progressVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: (percentage) => ({
      width: `${percentage}%`,
      opacity: 1,
      boxShadow: '0 0 12px rgba(34, 211, 238, 0.8), 0 0 24px rgba(168, 85, 247, 0.6)',
      transition: { duration: 1.5, ease: 'easeOut', type: 'spring', stiffness: 80, damping: 20 },
    }),
  };

 const skills = [
    { name: 'Java', percentage: 85,  },
    { name: 'Spring Boot', percentage: 80, description: 'Building scalable backend applications with REST APIs.' },
    { name: 'Spring Security', percentage: 75, description: 'Implementing secure authentication with JWT.' },
    { name: 'Oracle SQL', percentage: 78, description: 'Designing and querying relational databases.' },
    { name: 'React', percentage: 70, description: 'Creating responsive frontend interfaces.' },
    { name: 'Maven', percentage: 80, description: 'Managing project dependencies and builds.' },
    { name: 'Git', percentage: 85, description: 'Version control and collaborative development.' },
  ];
  const education = [
   {
      degree: 'Bachelor of Computer Science',
      institution: 'Dr. Babasaheb Ambedkar Marathwada University, Sambhajinagar',
      year: '2022 - 2025',
      description: 'Pursuing a degree with a focus on software engineering and Java development.',
    },
    {
      degree: 'HSC (Arts, Commerce, and Science)',
      institution: 'Shree Goraksh College Khamgaon',
      year: '2021 - 2022',
      description: 'Achieved 76% with a strong foundation in science and mathematics.',
    },
    {
      degree: 'SSC',
      institution: 'New High School, Aland',
      year: '2019 - 2020',
      description: 'Secured 67%, building a solid academic base.',
    },
  ];

  return (
    <section ref={ref} className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-12 text-center">
          Education & Skills
        </h2>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Education Cards (Left Side) */}
          <motion.div
            className="lg:w-1/2 space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            variants={cardVariants}
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="relative bg-gray-800/50 backdrop-blur-md p-6 rounded-xl border border-cyan-400/30 shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                variants={cardVariants}
                whileHover={{ scale: 1.05, rotate: 1, transition: { duration: 0.3 } }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur-sm opacity-50"></div>
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-semibold text-cyan-300">{edu.degree}</h3>
                  <p className="text-gray-400 font-mono">{edu.institution}</p>
                  <p className="text-gray-500 text-sm">{edu.year}</p>
                  <p className="text-gray-400 mt-2 text-sm sm:text-base">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Level Lines (Right Side) */}
          <motion.div
            className="lg:w-1/2 space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            variants={cardVariants}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-cyan-300 text-center lg:text-left">
              Technical Skills
            </h3>
            <div className="space-y-6 mx-auto lg:mx-0">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center space-x-4">
                    <span className="w-28 sm:w-32 text-gray-300 font-mono text-sm sm:text-base">{skill.name}</span>
                    <div className="flex-1 bg-gray-700 rounded-full h-3 sm:h-4 overflow-hidden relative">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        variants={progressVariants}
                        custom={skill.percentage}
                      />
                    </div>
                    <span className="text-gray-400 text-sm">{skill.percentage}%</span>
                  </div>
                  {/* <p className="text-gray-400 text-sm font-mono">{skill.description}</p> */}
                </div>
              ))}
            </div>
            {/* Text Below Skills */}
            <motion.p
              className="text-gray-400 text-sm sm:text-base font-mono  mx-auto lg:mx-0 mt-10"
              variants={cardVariants}
            >I am a quick learner with strong analytical and problem-solving abilities, able to adapt swiftly to new challenges and technologies. I thrive in fast-paced environments and consistently maintain a high attention to detail in my work. My excellent communication skills and collaborative mindset make me an effective team player, committed to contributing positively to group efforts and achieving shared goals.</motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;