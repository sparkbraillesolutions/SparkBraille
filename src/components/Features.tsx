import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      image: "images/braille.png",
      title: "Customizable Braille Display",
      points: [
        "Available in various configurations with 20 cells or less.",
        "Offers different levels of character display for user preference.",
        "Customizable design caters to individual needs for Braille character representation."
      ]
    },
    {
      image: "images/braille 2.png",
      title: "Innovative 20 cell device",
      points: [
        "Note taker",
        "File Manager",
        "Text, BRF. BRL file reader.",
        "Audio book Reading",
        "Calculator",
        "Perkins style keyboard",
        "compatible with standard QWERTY"
      ]
    },
    {
      image: "images/snap.png",
      title: "Easy to Use Braille Reader",
      points: [
        "Designed with simplicity in mind for user-friendliness.",
        "Accessible for users of all ages and abilities.",
        "Easy to learn and use, promoting inclusivity."
      ]
    },
    {
      image: "images/audio.png",
      title: "Audio Guided",
      points: [
        "Provides audio assistance for navigating the device.",
        "Offers audio guidance for accessing information, promoting ease of use.",
        "Enhances user experience by facilitating interaction and information retrieval."
      ]
    },
    {
      image: "images/upload.png",
      title: "Upload and Read",
      points: [
        "Supports uploading various digital materials for convenient reading.",
        "Compatible with diverse content, including books, articles, and educational materials.",
        "Enhances accessibility by providing a wider range of reading options."
      ]
    },
    {
      image: "images/loan.png",
      title: "Affordable Braille Solution",
      points: [
        "Cost-effective design with prices ranging from $30 to $500.",
        "Significantly cheaper than existing Braille solutions.",
        "Affordability achieved through innovative cell design.",
        "Focus on essential features ensures quality at an accessible price point."
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Spark?</h1>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <img 
                src={feature.image} 
                alt="" 
                className="w-16 h-16 mb-6 mx-auto"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <ul className="space-y-2">
                {feature.points.map((point, i) => (
                  <li key={i} className="flex items-start text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;