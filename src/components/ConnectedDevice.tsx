import React from 'react';
import { motion } from 'framer-motion';

const ConnectedDevice = () => {
  const features = [
    {
      image: "images/connect.png",
      title: "Connect the device with the software"
    },
    {
      image: "images/bangla 2.png",
      title: "Teach Braille"
    },
    {
      image: "images/math.png",
      title: "Learn Mathematics"
    },
    {
      image: "images/bangla 1.png",
      title: "Learn Bangla Alphabet"
    },
    {
      image: "images/alphabet.png",
      title: "Learn Braille"
    },
    {
      image: "images/textfile_read.png",
      title: "Read Text or PDF File"
    }
  ];

  return (
    <section id="connected-device" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Spark is a connected device
          </h1>
          <img
            src="images/connected_classroom.png"
            alt="An illustration of a connected classroom concept"
            className="max-w-screen-sm mx-auto mb-8"
          />
          <p className="text-2xl text-gray-800 mb-2">
            Spark comes with an easy to use software
          </p>
          <p className="text-2xl text-blue-600">
            Connect, Upload, Read
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
            >
              <img
                src={feature.image}
                alt=""
                className="w-34 h-34 mx-auto mb-6 object-contain"
              />
              <h3 className="text-xl font-semibold text-center text-gray-900">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ConnectedDevice;