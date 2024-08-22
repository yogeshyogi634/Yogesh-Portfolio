import { useRef } from "react";
import "./project.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    name: "Spotify Clone",
    img: "https://images.pexels.com/photos/16773548/pexels-photo-16773548/free-photo-of-youtube-music-stream-songs-and-music-videos-app-on-the-display-of-smartphone-or-tablet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Created a Spotify Clone using ReactJS, JavaScript, and Tailwind CSS. Focused on dynamic features, real-time data, and responsive design for a seamless user experience.",
    demo: "https://github.com/yogeshyogi634/Spotify-Clone",
  },
  {
    id: 2,
    name: "Youtube Clone",
    img: "/youtube-image.webp",
    desc: "Built a YouTube clone using ReactJS, Styled Components, Node.js, Express.js, and MongoDB with user authentication and video streaming features.",
    demo: "https://github.com/yogeshyogi634/Youtube-Clone",
  },
  {
    id: 3,
    name: "ChatGPT Clone",
    img: "/chatgpt.jpeg",
    desc: "Built a ChatGPT clone using ReactJS, SCSS, Node.js, Express.js, and MongoDB. The project features a user-friendly interface and robust backend functionality",
    demo: "https://github.com/yogeshyogi634/ChatGPT-Clone",
  },
  {
    id: 4,
    name: "E-Commerce Website",
    img: "/e-commerce.webp",
    desc: "Built an e-commerce website using React, SCSS, and Strapi, incorporating seamless product management and a user-friendly shopping experience.",
    demo: "https://github.com/yogeshyogi634/E-Commerce-App",
  },

  {
    id: 5,
    name: "Gaian Solution Website",
    img: "/website.webp",
    desc: "Developed a company marketing website using React, Tailwind CSS, SCSS, Firebase, EmailJS, and Framer Motion for dynamic features, real-time data, email integration, and animations.",
    demo: "https://www.gaiansolutions.com/",
  },
];

const SingleProject = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-500, 500]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.name}</h2>
            <p>{item.desc}</p>
            <a href={item.demo} target="_blank">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Project = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="project" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <SingleProject key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Project;
