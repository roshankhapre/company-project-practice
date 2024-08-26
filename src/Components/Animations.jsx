import React from "react";
import { motion } from "framer-motion";

const Animations = () => {
  return (
    <div>
      Animations
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Animated content
      </motion.div>
    </div>
  );
};

export default Animations;
