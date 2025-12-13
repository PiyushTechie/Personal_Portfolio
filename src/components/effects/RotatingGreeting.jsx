import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  { text: "Full Stack Developer" },
  { text: "MERN Stack Dev"},
  { text: "Backend Developer"},
  { text: "SDE"},
];

const RotatingGreeting = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center md:justify-start overflow-hidden h-8">
      <AnimatePresence mode="wait">
        <motion.p
          key={greetings[index].text}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl font-medium text-zinc-200"
        >
          {greetings[index].text}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default RotatingGreeting;