import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Partners = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const partners = [
    {
      image: "https://play-lh.googleusercontent.com/1CRcUfmtwvWxT2g-xJF8s9_btha42TLi6Lo-qVkVomXBb_citzakZX9BbeY51iholWs",
      name: "Mr. Pintu",
      role: "CEO of TomTom",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quis tenetur perferendis aperiam error, impedit quisquam ipsum accusamus reprehenderit maxime necessitatibus rem est corrupti vitae quam sequi iusto, commodi ducimus!"
    },
    // Add other partners here
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % partners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="sponsor" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-12 h-0.5 bg-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Strategic Partners
          </h1>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-xl p-8"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={partners[currentSlide].image}
                    alt={partners[currentSlide].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {partners[currentSlide].name}
                  </h2>
                  <h4 className="text-lg text-primary mb-4">
                    {partners[currentSlide].role}
                  </h4>
                  <p className="text-gray-600">
                    {partners[currentSlide].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {partners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;