import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: 'images/20_cell_1.png',
      alt: 'Slide 1',
      style: { width: '100%', height: '100%', margin: '0% 0% 0% 0%' }
    },
    {
      image: 'images/2_cell.png',
      alt: 'Slide 3',
      style: { width: '90%', height: '90%', margin: '0% 0% 0% 0%' }
    },
    {
      image: 'images/20cell2.png',
      alt: 'Slide 2',
      style: { width: '100%', height: '100%', margin: '0% 0% 0% 0%' }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0 bg-opacity-50" />
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              id="home-logo" 
              src="images/sparkbraille.png" 
              alt="Spark Logo"
              className="mx-auto md:mx-0 h-36 mb-8"
            />
            <h4 className="text-xl mb-4 animate-intro">Introducing</h4>
            <h1 className="text-6xl md:text-7xl font-bold text-primary mb-4 animate-intro">
              Spark
            </h1>
            <h3 className="text-2xl md:text-3xl mb-6 animate-intro">
              An Innovative & Affordable literacy device
            </h3>
            <h4 className="text-xl animate-intro">
              For <span className="text-primary">visually impaired person.</span>
            </h4>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 mt-12 md:mt-0">
          <div className="relative h-[400px] overflow-hidden rounded-xl">
            {slides.map((slide, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: currentSlide === index ? 1 : 0,
                  x: currentSlide === index ? 0 : 100
                }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-contain"
                  style={slide.style}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-primary' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;