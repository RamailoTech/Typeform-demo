import React from "react";
import { AnimatePresence, motion } from "framer-motion";
const VerticalAnimation = ({ children, activeIndex, direction }) => {
  const variants = {
    enter: (direction) => {
      return {
        zIndex: 1,
        y: direction > 0 ? "100%" : "-100%",
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 1,
        y: direction < 0 ? "100%" : "-100%",
        opacity: 0,
      };
    },
  };

  return (
    <AnimatePresence initial={false} custom={direction}>
      <motion.div
        key={activeIndex}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 50 },
          opacity: { duration: 0.4 },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default VerticalAnimation;
