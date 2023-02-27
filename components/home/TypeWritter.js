import Typical from "react-typical";
import classes from "./TypeWritter.module.css";

const TypeWritter = () => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.h1}>Hello, World!</h1>
      <p className={classes.writer}>
        I'm a&nbsp;
        <Typical
          loop={1}
          wrapper="b"
          steps={[
            "student",
            3000,
            "skydiver",
            3000,
            "sailor",
            3000,
            "developer .",
            3000,
          ]}
        />
      </p>
    </div>
  );
};

export default TypeWritter;
