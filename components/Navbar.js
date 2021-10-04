import React, { useState } from "react";
import Link from "next/link";
import useStyles from "../utils/style";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const classes = useStyles();

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <div className={classes.navbar}>
        <div className={classes.navbarcontent}>
          <div className={classes.logocontent}>
            <Link href="/">
              <a className={classes.logo}></a>
            </Link>
          </div>
          <ul className={click ? classes.navmenuactive : classes.navmenu}>
            <li className={classes.navitem}>
              <Link href="/">
                <a className={classes.navlinks}>Inicio</a>
              </Link>
            </li>
            <li className={classes.navitem}>
              <a className={classes.navlinks} href="#aboutme">
                About me
              </a>
            </li>
            <li className={classes.navitem}>
              <Link href="#contact">
                <a className={classes.navlinks}>Contact</a>
              </Link>
            </li>
          </ul>
          <div className={classes.menuicon} onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
