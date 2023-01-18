import React from 'react'
import {AnimatePresence, motion} from "framer-motion";
const VerticalAnimation = ({children,activeIndex,direction}) => {
    const variants = {
        enter: (direction) => {
          return {
            y: direction > 0 ? 1000 : -1000,
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
            zIndex: 0,
            y: direction < 0 ? 1000 : -1000,
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
        x: {type: "spring", stiffness: 300, damping: 30},
        opacity: {duration: 0.1},
      }}
    >
      {children}
    </motion.div>
  </AnimatePresence>
  )
}

export default VerticalAnimation