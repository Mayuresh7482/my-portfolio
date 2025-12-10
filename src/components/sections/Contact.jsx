import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, MapPin } from 'lucide-react';

const Contact = () => {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
   });

   const handleSubmit = (e) => {
      e.preventDefault();
      // In a real scenario, this would handle form submission
      console.log('Form submitted:', formData);
      alert("Thank you for your message! (This is a demo)");
      setFormData({ name: '', email: '', message: '' });
   };

   const handleChange = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value
      });
   };

   return (
      <section id="contact" className="py-20 bg-gray-900">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="text-center mb-16"
            >
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
               <div className="w-20 h-1 bg-secondary mx-auto rounded mb-8"></div>
               <p className="text-gray-400 max-w-2xl mx-auto">
                  Interested in collaborating on a project or have a question? Feel free to reach out.
               </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               {/* Contact Info */}
               <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="space-y-8"
               >
                  <div className="flex items-start space-x-4">
                     <div className="bg-primary p-3 rounded-lg text-secondary">
                        <Mail size={24} />
                     </div>
                     <div>
                        <h3 className="text-lg font-semibold text-white">Email</h3>
                        <a href="mailto:boratemayuresh757@gmail.com" className="text-gray-400 hover:text-secondary transition-colors">
                           boratemayuresh757@gmail.com
                        </a>
                     </div>
                  </div>

                  <div className="flex items-start space-x-4">
                     <div className="bg-primary p-3 rounded-lg text-secondary">
                        <Phone size={24} />
                     </div>
                     <div>
                        <h3 className="text-lg font-semibold text-white">Phone</h3>
                        <p className="text-gray-400">+91 8805322305</p>
                     </div>
                  </div>

                  <div className="flex items-start space-x-4">
                     <div className="bg-primary p-3 rounded-lg text-secondary">
                        <MapPin size={24} />
                     </div>
                     <div>
                        <h3 className="text-lg font-semibold text-white">Location</h3>
                        <p className="text-gray-400">Maharashtra, India</p>
                     </div>
                  </div>
               </motion.div>

               {/* Contact Form */}
               <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-primary p-8 rounded-xl border border-gray-800 shadow-lg"
               >
                  <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-6">
                     <input type="hidden" name="form-name" value="contact" />
                     <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                        <input
                           type="text"
                           id="name"
                           name="name"
                           value={formData.name}
                           onChange={handleChange}
                           required
                           className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
                           placeholder="Your Name"
                        />
                     </div>

                     <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                        <input
                           type="email"
                           id="email"
                           name="email"
                           value={formData.email}
                           onChange={handleChange}
                           required
                           className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors"
                           placeholder="your.email@example.com"
                        />
                     </div>

                     <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                        <textarea
                           id="message"
                           name="message"
                           value={formData.message}
                           onChange={handleChange}
                           required
                           rows="4"
                           className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-colors resize-none"
                           placeholder="How can I help you?"
                        ></textarea>
                     </div>

                     <button
                        type="submit"
                        className="w-full bg-secondary hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                     >
                        Send Message
                        <Send size={18} />
                     </button>
                  </form>
               </motion.div>
            </div>
         </div>
      </section>
   );
};

export default Contact;
