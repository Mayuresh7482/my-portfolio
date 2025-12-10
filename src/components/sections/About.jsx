import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
   return (
      <section id="about" className="py-20 bg-gray-900 border-b border-gray-800">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="text-center mb-16"
            >
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
               <div className="w-20 h-1 bg-secondary mx-auto rounded"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
               <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
               >
                  <h3 className="text-2xl font-semibold text-white mb-4">
                     Full Stack Engineer & Python Developer
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                     I specialize in building robust web applications and backend systems using <span className="text-secondary font-semibold">Python, Django, Flask</span>, and <span className="text-secondary font-semibold">ReactJS</span>. My expertise extends to cloud services like <span className="text-accent font-semibold">AWS</span> and managing databases such as <span className="text-accent font-semibold">PostgreSQL</span> and SQL.
                  </p>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                     In addition to full-stack development, I have significant experience in <span className="text-secondary font-semibold">RPA (Robotic Process Automation)</span> using Automation Edge and AI integration, driving efficiency and innovation in complex workflows.
                  </p>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-primary p-8 rounded-xl border border-gray-700 shadow-xl"
               >
                  <div className="space-y-4">
                     <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary font-bold text-xl">01</div>
                        <div>
                           <h4 className="text-white font-semibold">Backend Mastery</h4>
                           <p className="text-gray-400 text-sm">Python, Django, Flask, Node.js, Express.js</p>
                        </div>
                     </div>
                     <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent font-bold text-xl">02</div>
                        <div>
                           <h4 className="text-white font-semibold">Frontend & UI</h4>
                           <p className="text-gray-400 text-sm">ReactJS, JavaScript, HTML, CSS, Figma</p>
                        </div>
                     </div>
                     <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500 font-bold text-xl">03</div>
                        <div>
                           <h4 className="text-white font-semibold">Data & Automation</h4>
                           <p className="text-gray-400 text-sm">MongoDB, SQL, PostgreSQL, AutomationEdge RPA</p>
                        </div>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
   );
};

export default About;
