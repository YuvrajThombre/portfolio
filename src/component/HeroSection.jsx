import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeroSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const textControls = useAnimation();
  const photoControls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      textControls.start({ opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } });
      photoControls.start({ opacity: 1, scale: 1, rotate: 360, transition: { duration: 1.2, ease: 'easeOut' } });
    }
  }, [inView, textControls, photoControls]);

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div ref={ref} className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between z-10">
        {/* Left Side Text with Tech Style */}
        <motion.div
          className="lg:w-1/2 space-y-6 mb-12 lg:mb-0"
          initial={{ opacity: 0, y: 50 }}
          animate={textControls}
        >
             <h2 className="text-cyan-400 text-2xl tracking-widest font-semibold mb-0">Hello, I'm</h2>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse">
            Youraj Thomare
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-cyan-300 tracking-wide">
            Java Developer Crafting Scalable Solutions
          </p>
          <p className="text-base sm:text-lg text-gray-400 max-w-md font-mono">
          Building robust Java applications with Spring Boot, REST APIs, and modern DevOps practices to drive innovation and efficiency.
          </p>
          <a
            href="#work-experience"
            className="relative inline-block bg-transparent border-2 border-cyan-400 text-cyan-300 font-semibold py-3 px-8 rounded-full overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="relative z-10">Discover My Creations</span>
          </a>
        </motion.div>

        {/* Large Square Photo with Cyberpunk Glow, Adjusted Down in Tablet View */}
        <motion.div
          className="lg:w-1/2 flex justify-center md:mt-12"
          initial={{ opacity: 0, scale: 0.7, rotate: 0 }}
          animate={photoControls}
        >
          <div className="relative w-[256px] h-[256px] sm:w-[356px] sm:h-[356px] lg:w-[356px] lg:h-[356px]">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl blur-lg animate-pulse opacity-75"></div>
            <div className="absolute inset-0 border-4 border-cyan-400/50 rounded-xl animate-spin-slow"></div>
            <img
              src="/path-to-your-image.jpg"
              alt="Vishal Magar"
              className="relative w-full h-full rounded-xl object-cover shadow-2xl"
              onError={(e) => (e.target.src = 'https://i.ibb.co/YmfKWZW/hero1.jpg')}
            />
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
