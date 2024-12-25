import React from 'react';
import { motion } from 'framer-motion';
import { Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white">
      <section id="final" className="py relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <h2 className="text-4xl font-light text-primary mb-6">
                Make education inclusive
              </h2>
              <div className="space-y-4">
                <h4 className="text-lg text-gray-700">
                  We at Spark believe in making education more inclusive using technology. If
                  you believe in our vision, spread the word using the links below.
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=100048414672800"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Facebook size={24} />
                  </a>
                  {/* Add other social media links */}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="images/20_cell_1.png" 
                alt="Spark Device" 
                className="w-4/5 mx-auto"
              />
            </motion.div>
          </div>
        </div>

        {/* Slogan Section */}
        <section id="slogan" className="text-center py-16 bg-gray-50">
          <img 
            src="images/spark.png" 
            alt="Spark Logo" 
            className="h-24 mx-auto mb-4"
          />
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Spark</h1>
          <p className="text-xl text-gray-600">
            Empowering Vision, Enabling Education
          </p>
        </section>

        {/* Bottom Footer */}
        <div className="bg-black text-white py-4">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center">
              <div className="text-sm">
                <span>© 2024 Spark</span>
                <span className="mx-2">|</span>
                <a 
                  href="privacypolicy.htm" 
                  className="hover:text-gray-300 transition-colors"
                >
                  Privacy Policy
                </a>
              </div>
              
              {/* <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="Scroll to top"
              >
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;