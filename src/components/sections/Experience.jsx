import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
   const experiences = [
      {
         company: "Octrans Technologies Pvt. Ltd",
         role: "Full Stack Developer",
         period: "Jan 2023 – Jan 2024",
         details: [
            "Led development of end-to-end web applications, leveraging Python (Django/Flask) for the backend and ReactJS, JavaScript, HTML, and CSS for the frontend, utilizing PostgreSQL/MongoDB.",
            "Built and integrated RESTful APIs using Django REST Framework/Flask, resulting in an estimated 15% improvement in application load times.",
            "Collaborated cross-functionally within Agile sprints, utilizing Git for robust version control and code management."
         ]
      },
      {
         company: "ValueDx",
         role: "RPA Developer Intern",
         period: "May 2025 – Nov 2025",
         details: [
            "Designed, developed, and tested automation workflows using Automation Edge Process Studio.",
            "Optimized automation bots and validated test cases to ensure process reliability and accuracy.",
            "Contributed to AI-integrated automation projects for complex healthcare finance modules."
         ]
      }
   ];

   return (
      <section id="experience" className="py-20 bg-gray-900 border-b border-gray-800">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="text-center mb-16"
            >
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Experience</h2>
               <div className="w-20 h-1 bg-secondary mx-auto rounded"></div>
            </motion.div>

            <div className="space-y-12">
               {experiences.map((exp, index) => (
                  <motion.div
                     key={index}
                     initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: index * 0.2 }}
                     className="relative pl-8 md:pl-0"
                  >
                     <div className="md:flex items-start justify-between bg-primary p-6 rounded-xl border border-gray-800 shadow-lg hover:border-accent/50 transition-colors">
                        <div className="md:w-1/3 mb-4 md:mb-0 border-l-4 border-secondary pl-4">
                           <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                           <p className="text-secondary font-semibold text-lg">{exp.company}</p>
                           <p className="text-gray-500 text-sm mt-1 flex items-center gap-2">
                              <Briefcase size={14} />
                              {exp.period}
                           </p>
                        </div>

                        <div className="md:w-2/3 md:pl-8">
                           <ul className="space-y-2">
                              {exp.details.map((detail, idx) => (
                                 <li key={idx} className="text-gray-300 flex items-start">
                                    <span className="text-accent mr-2 mt-1.5">•</span>
                                    <span>{detail}</span>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Experience;
