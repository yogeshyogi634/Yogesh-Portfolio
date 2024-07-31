import "./skills.scss";
import { items } from "./data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const textVariants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const skillVariants = {
  initial: {
    scale: 1,
  },
  whileHover: {
    scale: [1, 1.2, 1.2, 1], // Scale up, hold, then scale down
    transition: {
      scale: {
        duration: 1, // Total duration for scaling up and down
        ease: "easeInOut",
        times: [0, 0.5, 1], // Scale up at 0%, hold at 50%, scale down at 100%
      },
    },
  },
};

const Skills = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <div>
      <motion.div
        className="skills"
        variants={textVariants}
        initial="initial"
        // animate="animate"
        // whileInView="animate"
        ref={ref}
        // animate={"animate"}
        animate={window.innerWidth <= 738 ? "animate" : isInView && "animate"}
      >
        <motion.h1 variants={textVariants}>What I Know </motion.h1>
        <motion.div className="skillContainer" variants={textVariants}>
          {items.map((item) => (
            <motion.div
              className="skill"
              key={item.id}
              variants={textVariants}
              whileHover={skillVariants.whileHover}
            >
              <motion.img src={item.img} alt="Skills Image" />
              <motion.p>{item.name}</motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
