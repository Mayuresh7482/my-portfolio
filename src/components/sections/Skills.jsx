import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
   const skills = [
      { category: "Backend", items: ["Python", "Django", "Flask", "Node.js", "Express.js"] },
      { category: "Frontend", items: ["ReactJS", "JavaScript", "HTML", "CSS", "Figma"] },
      { category: "Databases", items: ["MongoDB", "SQL", "PostgreSQL"] },
      { category: "QA & RPA", items: ["AutomationEdge RPA", "AI Integration"] },
   ];

   return (
      <section id="skills" className="py-20 bg-primary">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="text-center mb-16"
            >
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Proficiency</h2>
               <div className="w-20 h-1 bg-accent mx-auto rounded"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {skills.map((skillGroup, index) => (
                  <motion.div
                     key={index}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: index * 0.1 }}
                     className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-secondary transition-colors duration-300"
                  >
                     <h3 className="text-xl font-semibold text-white mb-6 border-b border-gray-700 pb-2">{skillGroup.category}</h3>
                     <div className="flex flex-wrap gap-3">
                        {skillGroup.items.map((skill, idx) => (
                           <span
                              key={idx}
                              className="px-3 py-1 bg-primary border border-gray-700 rounded-full text-gray-300 text-sm hover:text-white hover:border-secondary transition-colors cursor-default"
                           >
                              {skill}
                           </span>
                        ))}
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Skills;
