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
            <h3 className={classes.h3}>Programmer</h3>
            <p className={classes.p}>University of Gdańsk</p>
          </div>
          <div className={classes.description}>
            <p>
              Welcome to my Website! I'm Maciej Maziuk, a Computer Science
              student at University of Gdańsk. My place of origin is Poland. I
              am interested in Web Development. I am open and curious about
              other technologies. Outside of this, my hobbies are skateboarding,
              skydiving, motorcycles, sailing and squash.
            </p>
            <br />
            <p>
              If you have any queries, don't hesitate to send me an{" "}
              <a href="mailto: maciej@maziuk.com.pl">email</a> at
              maciej@maziuk.com.pl and I'll make every effort to reply promptly.
            </p>
            <br />
            <div className={classes.profic}>
              <h2>Proficiencies</h2>
              <ul>
                <ul>
                  Languages
                  <li>Python</li>
                  <li>Scala (+Akka)</li>
                  <li>JavaScript</li>
                </ul>
                <ul>
                  Web Development
                  <li>HTML, CSS</li>
                  <li>React</li>
                  <li>Next</li>
                  <li>Node.js</li>
                  <li>MongoDB</li>
                </ul>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <Footer class="footerScroll" />
    </>
  );
};

export default AboutPage;
