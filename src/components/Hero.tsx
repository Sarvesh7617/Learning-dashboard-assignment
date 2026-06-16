"use client";

import { motion } from "framer-motion";

const Hero=()=> {
  return (
    <div className="flex items-center justify-between">
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-semibold">
          Welcome back, Andaz 👋
        </h1>
        <p className="text-zinc-400 mt-1">
          Keep learning, you're doing great.
        </p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
        whileHover={{ scale: 1.05 }}
        className="bg-zinc-800 px-4 py-2 rounded-lg"
      >
        🔥 15 Day Streak
      </motion.div>

    </div>
  );
}


export default Hero;