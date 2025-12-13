import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const greetings = [
  "Hello!", 
  "नमस्ते!", 
  "bonjour!", 
  "¡Hola!", 
  "Ciao!", 
  "こんにちわ!", 
  "Hallo!"
];

const IntroScreen = ({ onComplete }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Cycle through greetings faster (every 250ms)
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev === greetings.length - 1) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 250); // Speed of word change

    // After the last word + delay, trigger the completion
    const timeout = setTimeout(() => {
      onComplete();
    }, 2500); // Total duration of intro (2.5 - 3 seconds)

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950"
      initial={{ y: 0 }}
      exit={{ y: "-100vh", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2 }}
        className="text-4xl md:text-6xl font-bold text-white tracking-widest italic"
      >
        {greetings[index]}
      </motion.span>
    </motion.div>
  );
};

export default IntroScreen;