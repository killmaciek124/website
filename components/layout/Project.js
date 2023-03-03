import classes from "./Project.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { projectActions } from "@/store";

const Project = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const seeMoreButtonHandler = () => {
    dispatch(projectActions.clearState());

    dispatch(
      projectActions.setState({
        title: props.title,
        description: props.description,
      })
    );
    router.push("/projects/" + props.id);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Image
          onClick={seeMoreButtonHandler}
          className={classes.img}
          src={props.img}
          alt={props.alt}
        />
      </div>
      <h2 onClick={seeMoreButtonHandler}>{props.title}</h2>
    </div>
  );
};

export default Project;
