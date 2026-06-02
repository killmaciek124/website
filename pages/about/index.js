import classes from "./index.module.css";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import mypic from "./macias.jpg";

const AboutPage = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <h1>About</h1>
        <section className={classes.content}>
          <div className={classes.left}>
            <Image
              className={classes.img}
              src={mypic}
              alt="picture of an author"
            />
            <h3 className={classes.h3}>GPU System Software Engineer Intern at Intel</h3>
            <p className={classes.p}>Computer Science Student</p>
          </div>
          <div className={classes.description}>
            <p>
              Welcome to my Website! I'm Maciej Maziuk, a Computer Science
              student. My place of origin is Poland. I am interested in
              automation technologies. I have a deep curiosity for the
              fundamental building blocks of our world and technology—I love
              understanding things from first principles, whether it's hardware
              or software. Outside of this, my hobbies are skydiving,
              speedcubing, sailing, volleyball and many others.
            </p>
            <br />
            <p>
              If you have any queries, don't hesitate to send me an{" "}
              <a href="mailto:maciej@maziuk.com.pl">email</a> at
              maciej@maziuk.com.pl and I'll make every effort to reply promptly.
            </p>
            <br />
          </div>
        </section>
      </div>
      <Footer class="footerScroll" />
    </>
  );
};

export default AboutPage;
