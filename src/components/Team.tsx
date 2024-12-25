import { motion } from 'framer-motion';

const Team = () => {
  const teamMembers = [
    {
      name: "Tonmoy Chandro Das",
      role: "CFO",
      university: "University of Chittagong",
      experience: "1+",
      experienceDetails: "year experience on managing Finance in different clubs and organizations.",
      image: "/images/team/tonmoy.png"
    },
    {
      name: "Falgoon Sen Apu",
      role: "CEO",
      university: "Bangladesh Army International University of Science and Technology",
      experience: "3+",
      experienceDetails: "Years of Experience in Embedded System Development",
      position: "Associate Engineer, Hardware Department (R&D) THINK LTD.",
      image: "/images/team/falgoon.jpg"
    },
    {
      name: "Atanu Kumar Dey",
      role: "CTO",
      university: "University of Chittagong",
      experience: "2+",
      experienceDetails: "Years of Experience in Embedded System Development",
      position: "Firmware Development Engineer, Hardware Department (R&D) THINK LTD.",
      image: "/images/team/atanu.jpg"
    },
    {
      name: "Mohaimen Sarker",
      role: "CMO",
      university: "University of Chittagong",
      experience: "2+",
      experienceDetails: "year experience on outreach and communication management in different university clubs.",
      position: "Former instructor at Programming Hero",
      image: "/images/team/mohaimen.png"
    },
    {
      name: "Mohammad Fahim Foisal",
      role: "User Experience Design",
      university: "University of Chittagong",
      experience: "2+",
      experienceDetails: "year experience in web development and user experience research.",
      image: "/images/team/fahim.png"
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
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-navy-900 mb-16 text-left"
        >
          We Are.....
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-blue-900 mb-2">
                {member.name}
              </h3>
              <h4 className="text-lg font-semibold text-red-500 mb-2">
                {member.role}
              </h4>
              <p className="text-sm text-gray-700 mb-3">
                {member.university}
              </p>
              <div className="space-y-2">
                <p className="text-sm font-semibold">
                  <span className="text-xl text-blue-900">{member.experience}</span>
                  <br />
                  {member.experienceDetails}
                </p>
                {member.position && (
                  <p className="text-sm text-gray-600">
                    {member.position}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;