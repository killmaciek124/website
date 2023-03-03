import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div className={classes.wrapper}>
      <MainNavigation />
      {props.children}
    </div>
  );
}

export default Layout;
