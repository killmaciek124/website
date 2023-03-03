import classes from "./SideBar.module.css";
import { FiX } from "react-icons/fi";
import { navActions } from "@/store/index";
import { useDispatch } from "react-redux";
import Link from "next/link";

const SideBar = () => {
  const dispatch = useDispatch();
  const onHideBarHandler = () => {
    dispatch(navActions.hideNavBar());
  };

  return (
    <nav className={classes.navbar}>
      <label onClick={onHideBarHandler}>
        <p>
          <FiX />
        </p>
      </label>

      <div className={classes.menu}>
        <ul className={classes.list}>
          <li>
            <Link onClick={onHideBarHandler} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={onHideBarHandler} href="/about">
              About
            </Link>
          </li>

          <li>
            <Link onClick={onHideBarHandler} href="/projects">
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideBar;
