import "./navbar.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <div className="wrapper">
        <span>YOGESH</span>
        <div className="social">
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
