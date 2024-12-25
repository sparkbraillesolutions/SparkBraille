import React from 'react';
import { motion } from 'framer-motion';

const PilotTesting = () => {
  const videos = [
    {
      url: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F108748840792972%2Fvideos%2F1011564466272918%2F&show_text=false&width=560&t=0",
      title: "Pilot Testing Video 1"
    },
    {
      url: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F108748840792972%2Fvideos%2F429055988375092%2F&show_text=false&width=560&t=0",
      title: "Pilot Testing Video 2"
    }
  ];

  return (
    <section id="pilot_testing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Pilot Testing
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative aspect-video rounded-xl overflow-hidden shadow-lg"
            >
              <iframe
                src={video.url}
                title={video.title}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                className="absolute top-0 left-0 w-full h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PilotTesting;