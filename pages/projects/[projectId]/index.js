import classes from "./index.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const ProjectDetailsPage = (props) => {
  const details = useSelector((state) => state.project);

  return (
    <div className={classes.wrapper}>
      {/* <h1>{details.title}</h1>
      <p>{details.description}</p> */}
      <h1>Maziuk Bakery Website</h1>

      <p>
        This website was created to showcase the products and services of Maziuk
        Bakery, a family-owned bakery that has been serving delicious baked
        goods for generations.
      </p>

      <h2>Technologies Used</h2>

      <ul>
        <li>NextJs</li>
        <li>tailwind CSS</li>
        <li>React</li>
        <li>nextauth with google provider</li>
        <li>sweetalert2</li>
        <li>mongoDb</li>
      </ul>

      <h2>Functions of the Website</h2>

      <p>The Maziuk Bakery website offers the following features:</p>

      <ul>
        <li>
          Displaying a menu of baked goods from the bakery's mongoDB database,
          with options to add and delete items from the database
        </li>
        <li>Showcasing the location of the bakery using Google Maps</li>
        <li>Providing contact information for the bakery</li>
        <li>
          Admin panel with Google authentication for easy management of website
          content
        </li>
        <li>
          Displaying pictures from the bakery's Facebook page, using Graph API
          from Facebook
        </li>
      </ul>

      <h2>Links</h2>

      <p>
        Visit the Maziuk Bakery website at{" "}
        <a className={classes.link} href="https://maziuk.eu">
          maziuk.eu
        </a>
      </p>

      <p>
        View the GitHub project at{" "}
        <a
          className={classes.link}
          href="https://github.com/killmaciek124/bakery"
        >
          https://github.com/killmaciek124/bakery
        </a>
      </p>
      <Link className={classes.link} href="/projects">
        Go back
      </Link>
    </div>
  );
};

export default ProjectDetailsPage;
