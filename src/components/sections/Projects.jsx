import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';

import hospitalImg from '../../assets/projects/hospital.png';
import foodImg from '../../assets/projects/food.png';
import bookImg from '../../assets/projects/book.png';
import earthquakeImg from '../../assets/projects/earthquake.png';
import miscImg from '../../assets/projects/misc.png';

const Projects = () => {
   const [filter, setFilter] = useState('All');

   const projects = [
      {
         title: "Global Healthcare Hospital",
         category: "Full Stack",
         tags: ["Python", "Django/Flask", "React", "AI Integration"],
         description: "Developed AI-powered modules (Doctor as AI, Chatbot, Invoice Reconciliation) integrated with OpenEMR.",
         link: "https://globalhealthcarehospitalbymborate.netlify.app/",
         image: hospitalImg
      },
      {
         title: "Hunger Help",
         category: "Full Stack",
         tags: ["Python", "Django REST", "React"],
         description: "Web application connecting food donors with NGOs using Django REST Framework.",
         link: "https://hungerhelpmayureshborate.netlify.app/",
         image: foodImg
      },
      {
         title: "Book Finder",
         category: "Frontend",
         tags: ["React", "JavaScript", "API"],
         description: "A dynamic tool for searching and displaying book information via an external API.",
         link: "https://book-finder-mayuresh-borate.netlify.app/",
         image: bookImg
      },
      {
         title: "Earthquake Monitor",
         category: "Frontend",
         tags: ["React", "JavaScript", "API"],
         description: "An application for monitoring and displaying real-time seismic activity/data.",
         link: "https://earthquakemonitorbymayureshborate.netlify.app/",
         image: earthquakeImg
      },
      {
         title: "BrewHub Smart Billing",
         category: "Full Stack",
         tags: ["Flask/Django", "React", "RESTful Backend"],
         description: "Developed a dynamic billing dashboard with a RESTful backend.",
         link: "#",
         image: miscImg
      },
      {
         title: "Memory Match Game",
         category: "Frontend",
         tags: ["JavaScript", "DOM Manipulation"],
         description: "Interactive logic puzzle focused on testing core programming and DOM manipulation skills.",
         link: "#",
         image: miscImg
      }
   ];

   const categories = ["All", "Full Stack", "Frontend", "AI Integration"];

   const filteredProjects = filter === 'All'
      ? projects
      : projects.filter(p => p.category === filter || p.tags.some(t => t.includes(filter)));

   return (
      <section id="projects" className="py-20 bg-primary">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="text-center mb-12"
            >
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
               <div className="w-20 h-1 bg-accent mx-auto rounded mb-8"></div>

               <div className="flex flex-wrap justify-center gap-4">
                  {categories.map((cat) => (
                     <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${filter === cat
                              ? 'bg-secondary text-white'
                              : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                           }`}
                     >
                        {cat}
                     </button>
                  ))}
               </div>
            </motion.div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
               <AnimatePresence>
                  {filteredProjects.map((project, index) => (
                     <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        key={project.title}
                        className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-secondary group shadow-lg flex flex-col h-full"
                     >
                        <div className="h-48 bg-gray-800 relative overflow-hidden">
                           {/* Image Container */}
                           <div className="w-full h-full relative">
                              <img
                                 src={project.image}
                                 alt={project.title}
                                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                 {project.link !== '#' && (
                                    <a
                                       href={project.link}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="p-3 bg-white text-black rounded-full hover:bg-secondary hover:text-white transition-colors"
                                    >
                                       <ExternalLink size={24} />
                                    </a>
                                 )}
                                 {project.link === '#' && (
                                    <span className="p-3 bg-gray-600 text-white rounded-full cursor-not-allowed">
                                       <ExternalLink size={24} />
                                    </span>
                                 )}
                              </div>
                           </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                           <h3 className="text-xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                              {project.link !== '#' ? (
                                 <a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
                              ) : (
                                 project.title
                              )}
                           </h3>
                           <p className="text-gray-400 mb-4 flex-1 text-sm">{project.description}</p>

                           <div className="flex flex-wrap gap-2 mt-auto">
                              {project.tags.map(tag => (
                                 <span key={tag} className="text-xs px-2 py-1 bg-primary border border-gray-700 rounded text-gray-300">
                                    {tag}
                                 </span>
                              ))}
                           </div>
                        </div>
                     </motion.div>
                  ))}
               </AnimatePresence>
            </motion.div>
         </div>
      </section>
   );
};

export default Projects;
