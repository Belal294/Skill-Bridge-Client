import { FaShoppingCart } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { FaTags } from "react-icons/fa";
import { BsShieldLock } from "react-icons/bs";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      icon: <FaShoppingCart className="text-4xl text-white" />,
      title: "Free Delivery",
      description:
        "Get your orders delivered at no extra cost, fast and hassle-free.",
    },
    {
      icon: <MdVerified className="text-4xl text-white" />,
      title: "Quality Guarantee",
      description:
        "We ensure top-notch quality for every product you purchase.",
    },
    {
      icon: <FaTags className="text-4xl text-white" />,
      title: "Daily Offers",
      description: "Exclusive discounts and special deals available every day.",
    },
    {
      icon: <BsShieldLock className="text-4xl text-white" />,
      title: "100% Secure Payment",
      description:
        "Your payment information is encrypted and completely secure.",
    },
  ];

  return (
    <section className="px-6 md:px-16 py-20 bg-gray-50 gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center flex flex-col items-center"
            initial={{ y: 0 }}
            animate={{ y: ["0px", "-30px", "0px", "30px", "0px"] }} // Increased up-down motion
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop", // Loop indefinitely
            }}
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-400 to-pink-500 flex items-center justify-center shadow-md mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-500 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
