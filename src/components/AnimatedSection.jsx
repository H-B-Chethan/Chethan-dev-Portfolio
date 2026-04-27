import { motion as Motion, useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedSection = ({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 50,
  duration = 0.6,
  once = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    margin: "-100px 0px -100px 0px",
    amount: 0.2,
  });

  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  const variants = {
    hidden: {
      opacity: 0,
      ...directions[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <Motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </Motion.div>
  );
};

export default AnimatedSection;
