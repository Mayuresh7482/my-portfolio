import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
   return (
      <footer className="bg-gray-900 border-t border-gray-800">
         <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
               <div className="mb-8 md:mb-0">
                  <span className="text-2xl font-bold text-white">Mayuresh<span className="text-accent">.</span></span>
                  <p className="mt-2 text-gray-400 text-sm">Full Stack Engineer & Python Developer</p>
               </div>

               <div className="flex space-x-6">
                  <a href="https://www.github.com/Mayuresh7482" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition-colors">
                     <span className="sr-only">GitHub</span>
                     <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/mayuresh-borate-8a732b1b3" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition-colors">
                     <span className="sr-only">LinkedIn</span>
                     <Linkedin size={24} />
                  </a>
                  <a href="mailto:boratemayuresh757@gmail.com" className="text-gray-400 hover:text-secondary transition-colors">
                     <span className="sr-only">Email</span>
                     <Mail size={24} />
                  </a>
               </div>
            </div>

            <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
               <p>&copy; {new Date().getFullYear()} Mayuresh Mukund Borate. All rights reserved.</p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
