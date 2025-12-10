import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);

   const navLinks = [
      { name: 'About', href: '#about' },
      { name: 'Experience', href: '#experience' },
      { name: 'Projects', href: '#projects' },
      { name: 'Skills', href: '#skills' },
      { name: 'Contact', href: '#contact' },
   ];

   return (
      <nav className="fixed w-full z-50 bg-primary/90 backdrop-blur-sm border-b border-gray-800">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
               <div className="flex-shrink-0">
                  <a href="#" className="text-xl font-bold text-white">Mayuresh<span className="text-accent">.</span></a>
               </div>

               <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                     {navLinks.map((link) => (
                        <a
                           key={link.name}
                           href={link.href}
                           className="text-gray-300 hover:text-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                        >
                           {link.name}
                        </a>
                     ))}
                  </div>
               </div>

               <div className="-mr-2 flex md:hidden">
                  <button
                     onClick={() => setIsOpen(!isOpen)}
                     className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                  >
                     {isOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
               </div>
            </div>
         </div>

         <AnimatePresence>
            {isOpen && (
               <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden bg-primary"
               >
                  <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                     {navLinks.map((link) => (
                        <a
                           key={link.name}
                           href={link.href}
                           onClick={() => setIsOpen(false)}
                           className="text-gray-300 hover:text-secondary block px-3 py-2 rounded-md text-base font-medium"
                        >
                           {link.name}
                        </a>
                     ))}
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </nav>
   );
};

export default Navbar;
