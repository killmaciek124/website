import Footer from "@/components/layout/Footer";
import classes from "./index.module.css";
import logo from "./logo.jpg";
import Project from "@/components/layout/Project";
const ProjectsPage = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <h1>Projects</h1>
        <section className={classes.content}>
          <div className={classes.project}>
            <Project
              id="p1"
              title="Cukiernia Maziuk"
              img={logo}
              alt="Logo of bakery"
              description="This Website is currently under construction"
            />
          </div>
        </section>
      </div>
      <Footer class="footerScroll" />
    </>
  );
};

export default ProjectsPage;
