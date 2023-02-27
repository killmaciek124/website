import classes from "./Footer.module.css";
import { BsLinkedin, BsGithub, BsYoutube } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";

const Footer = (props) => {
  const footerClass = props.class;
  return (
    <footer className={classes[footerClass]}>
      <section className={classes.links}>
        <a
          href="https://www.linkedin.com/in/maciej-maziuk-120ab1242/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/killmaciek124"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noreferrer"
        >
          <BsYoutube />
        </a>
      </section>
      <ul className={classes.info}>
        <li>Maciej Maziuk</li>
        <li>
          <BiCopyright />
          2023
        </li>
        <li>Maziuk's Website</li>
      </ul>
    </footer>
  );
};

export default Footer;
