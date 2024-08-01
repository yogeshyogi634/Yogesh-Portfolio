import "./navbar.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{
            scale: 1.2,
            rotate: 360,
            opacity: 1,
            transition: { duration: 0.6 },
          }}
        >
          <span>&lt;Yogesh /&gt;</span>
        </motion.span>
        <motion.div
          className="social"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href="https://github.com/yogeshyogi634/" target="_blank">
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/contact-yogesh-ku/"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
          <a href="#">
            <InstagramIcon />
          </a>
          <a href="#">
            <YouTubeIcon />
          </a>
          <a href="#">
            <FacebookIcon />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
