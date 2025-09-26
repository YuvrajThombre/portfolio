import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



const workData = [
  {
    id: '1',
   title: 'LIC Agent Web Application',
    // company: 'TechCorp Solutions',
    duration: 'May 2025',
     description: 'Developed a full-stack web application for LIC agents to manage insurance plans, blogs, and user inquiries, featuring distinct interfaces for users and admins. Built a secure REST API with Spring Boot, integrated JWT-based Spring Security, and designed a responsive React frontend. Deployed on Netlify and Render (backend) for scalable hosting.',
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'REST API', 'React.js', 'MongoDB', 'Maven', 'Git', 'Netlify', 'Render'],
    image: 'https://i.ibb.co/JgYB0N9/lic.png',
    liveDemoLink: 'https://rushikesh-aher.netlify.app/',
    viewMoreLink: '#',
  },
   {
    id: '2',
   title: 'Salon Management System',
    // company: 'TechCorp Solutions',
    duration: 'June 2025',
     description: 'Created a full-stack web application to streamline salon operations, supporting role-based access for admins, staff, and users',
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'REST API', 'React.js', 'MongoDB', 'Maven', 'Git'],
    image: 'https://i.ibb.co/JwK0KdFX/neva-s-bearuty.png',
    // liveDemoLink: '#',
    // viewMoreLink: '#',
  },
];

const WorkExperience = () => {
  const [error, setError] = useState(null);
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (!workData || !Array.isArray(workData) || workData.length === 0) {
      setError('No work experience data available.');
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.98 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 120, damping: 20, delay: i * 0.3 },
    }),
    hover: {
      scale: 1.02,
      boxShadow: '0 0 15px rgba(34, 211, 238, 0.5), 0 0 30px rgba(168, 85, 247, 0.3)',
      borderColor: 'rgba(34, 211, 238, 0.5)',
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  if (error) {
    return (
      <section className="py-16 px-4 text-center text-gray-400 font-mono">
        <p>{error}</p>
      </section>
    );
  }

  return (
    <section
      id="work-experience"
      ref={ref}
      className="relative py-16 px-4 sm:px-8 bg-transparent min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div
        className="max-w-5xl mx-auto relative z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
       <motion.h2
  className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-12 text-center"
  variants={cardVariants}
  custom={0}
>
  My Work
</motion.h2>


        <div className="space-y-6">
          {workData.map((work, index) => (
            <motion.div
              key={work.id || index}
              className="relative bg-gray-800/50 backdrop-blur-md rounded-2xl border border-cyan-400/30 shadow-lg hover:shadow-cyan-500/50 flex flex-col md:flex-row items-center overflow-hidden"
              variants={cardVariants}
              custom={index + 1}
              whileHover="hover"
            >
              {/* Image Section */}
              <div className="md:w-1/2 w-full h-48 md:h-auto">
                <img
                  src={work.image}
                  alt={`${work.company} project`}
                  className="w-full h-full object-cover rounded-t-2xl md:rounded-t-none md:rounded-l-2xl"
                />
              </div>

              {/* Text Section */}
              <div className="md:w-1/2 w-full p-6 flex flex-col">
                <h3 className="text-xl md:text-2xl font-semibold text-cyan-300 font-mono mb-2">
                  {work.title || 'Untitled Role'}
                </h3>
                <p className="text-gray-400 font-mono text-sm sm:text-base mb-1">
                   {work.duration || 'Unknown Duration'}
                </p>
                <p className="text-gray-400 font-mono text-sm sm:text-base mb-4 ">
                  {work.description || 'No description available.'}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {(work.technologies || []).map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs font-mono border border-cyan-400/50 whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Buttons Section */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={work.liveDemoLink}
                    className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-sans hover:bg-blue-700 transition duration-300"
                  >
                    Live Now
                  </a>
                  {/* <a
                    href={work.viewMoreLink}
                    className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-sans hover:bg-gray-800 transition duration-300"
                  >
                    View More
                  </a> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default WorkExperience;
