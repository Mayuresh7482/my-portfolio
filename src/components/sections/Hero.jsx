import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, ExternalLink } from 'lucide-react';

const Hero = () => {
   return (
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-primary via-gray-900 to-primary text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">

            {/* Profile Image */}
            <motion.div
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5 }}
               className="md:w-1/3 flex justify-center"
            >
               <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-secondary shadow-2xl shadow-secondary/20">
                  <img src="/src/assets/profile.jpg" alt="Mayuresh Mukund Borate" className="w-full h-full object-contain" />
               </div>
            </motion.div>

            {/* Text Content */}
            <div className="md:w-2/3 text-center md:text-left">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
               >
                  <span className="text-secondary font-semibold text-lg mb-4 block">Full Stack Engineer & Python Developer</span>
               </motion.div>

               <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
               >
                  Mayuresh Mukund Borate<span className="text-accent">.</span>
               </motion.h1>

               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-xl text-gray-300 mb-10 leading-relaxed"
               >
                  Building Scalable Web Applications and RESTful APIs, and implementing RPA workflows.
               </motion.p>

               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
               >
                  <a
                     href="https://www.linkedin.com/in/mayuresh-borate-8a732b1b3"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="group px-8 py-4 bg-secondary hover:bg-teal-600 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                     LinkedIn
                     <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                     href="https://www.github.com/Mayuresh7482"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="group px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                     GitHub
                     <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                     href="/resume.pdf"
                     download
                     className="group px-8 py-4 border border-gray-600 hover:border-accent hover:text-accent text-gray-300 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                     Resume
                     <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                  </a>
               </motion.div>
            </div>
         </div>
      </section>
   );
};

export default Hero;
