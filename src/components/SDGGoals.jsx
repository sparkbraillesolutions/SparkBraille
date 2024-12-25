import { motion } from 'framer-motion';

const SDGGoals = () => {
  const primaryGoals = [
    { image: "images/SDG4.png", alt: "SDG Goal 4" },
    { image: "images/SDG10.png", alt: "SDG Goal 10" }
  ];

  const secondaryGoals = [
    { image: "images/sdg1.png", alt: "SDG Goal 1" },
    { image: "images/sdg2.png", alt: "SDG Goal 2" },
    { image: "images/sdg8.png", alt: "SDG Goal 8" },
    { image: "images/sdg17.png", alt: "SDG Goal 17" },
    { image: "images/sdg11.png", alt: "SDG Goal 11" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="sdg" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            SDG Goals Achieved
          </h1>
        </motion.div>

        {/* Primary SDG Goals */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 mb-12"
        >
          {primaryGoals.map((goal, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex justify-center"
            >
              <img
                src={goal.image}
                alt={goal.alt}
                className="w-full max-w-[300px] rounded-lg hover:shadow-xl transition-shadow"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Secondary SDG Goals */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {secondaryGoals.map((goal, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex justify-center"
            >
              <img
                src={goal.image}
                alt={goal.alt}
                className="w-full max-w-[200px] rounded-lg hover:shadow-xl transition-shadow"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SDGGoals;