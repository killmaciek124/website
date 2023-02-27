import classes from "./MainNavigation.module.css";
import { FiAlignJustify } from "react-icons/fi";
import Link from "next/link";
import { navActions } from "@/store/index";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import SideBar from "./SideBar";
const MainNavigation = () => {
  const dispatch = useDispatch();

  const isNavigationBarVisible = useSelector(
    (state) => state.nav.isNavBarVisible
  );

  const showBarHandler = () => {
    dispatch(navActions.showNavBar());
  };
  return (
    <>
      <nav className={classes.navbar}>
        <label onClick={showBarHandler}>
          <p>
            <FiAlignJustify />
          </p>
        </label>

        <p className={classes.logo}>
          <Link href="/">maziuk.</Link>
        </p>

        <div className={classes.menu}>
          <ul className={classes.list}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>

            <li>
              <Link href="/projects">Projects</Link>
            </li>
          </ul>
        </div>
      </nav>
      {isNavigationBarVisible && <SideBar />}
    </>
  );
};

export default MainNavigation;
