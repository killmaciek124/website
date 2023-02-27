import classes from "./index.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const ProjectDetailsPage = (props) => {
  const details = useSelector((state) => state.project);

  return (
    <div className={classes.wrapper}>
      <h1>{details.title}</h1>
      <p>{details.description}</p>
      <Link className={classes.link} href="/projects">
        Go back
      </Link>
    </div>
  );
};

export default ProjectDetailsPage;
