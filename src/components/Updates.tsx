import { motion } from 'framer-motion';

const Updates = () => {
  const posts = [
    {
      url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02c2Y43Nyo2M4dj1ej21eukJjxSwxw5tHL3rWycMV52ZiZYdjx7RnfAfwH62bjRVDTl%26id%3D108748840792972"
    },
    {
      url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0dYtSmKpXfk21yXixEW6hNfkHGY6Z6j4fupCFHX73rvxWogzF5GXa5NqvNFqAY3jFl%26id%3D100048414672800"
    },
    {
      url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0UC1Cqs2rk4C4pa3kiWzi6htFrLo6gS7cfS3qxR4ysQp1Y8t51mrTdZnX5wZin7f6l%26id%3D108748840792972"
    },
    {
      url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02FLyNkWcPervVEucpEB4gECkpCc1bLuz3zBdEeokVZ79VFKC6BrJ86Qq6s2MfPs1Jl%26id%3D108748840792972"
    }
  ];

  return (
    <section id="updates" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Updates
          </h1>
        </motion.div>

        <div className="relative">
          <div className="flex overflow-x-auto pb-8 space-x-6 scrollbar-hide">
            {posts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex-none w-[500px]"
              >
                <iframe
                  src={post.url}
                  width="500"
                  height="709"
                  style={{ border: 'none' }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  className="rounded-xl shadow-lg"
                />
              </motion.div>
            ))}
          </div>

          {/* Scroll indicators */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {posts.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-primary opacity-50"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Updates;