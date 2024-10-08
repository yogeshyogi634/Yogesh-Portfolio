import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  const handleView = () => {
    const resumeUrl = `/Yogesh Resume.pdf`;
    window.open(resumeUrl, "_blank");
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    document.getElementById("Contact").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>YOGESH K U</motion.h2>
          <motion.h1 variants={textVariants}>Full Stack Developer</motion.h1>
          <motion.p variants={textVariants}>
            Passionate about building robust web applications and crafting
            seamless user experiences.
          </motion.p>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants} onClick={handleView}>
              View Resume
            </motion.button>
            <a href="#Contact" onClick={handleScrollToContact}>
              <motion.button variants={textVariants}>Contact Me</motion.button>
            </a>
          </motion.div>
          <motion.img
            src="/scroll.png"
            alt="scroll"
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Web Developer
      </motion.div>
      <div className="imageContainer">
        <img src="/hero3.png" alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
