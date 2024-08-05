import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FaBars } from "react-icons/fa6";

export default function Navbar() {
  const [isToggled, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!isToggled); //
  };
  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.nav_con}>
          <div className={styles.logo}>
            <a href="#">Mos Port</a>
          </div>
          <ul>
            <li>
              <a href="#">Skill</a>
            </li>
            <li>
              <a href="#">Protfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className={styles.button}>
            <a href="#">Hire Me</a>
          </div>
        </div>

        <div>
            {/* {moblie menu} */}
            <FaBars className={styles.bars} onClick={handleToggle}/>
            {isToggled ? (
                <>
                <ul className={styles.mobile_menu}>
            <li>
              <a href="#">Skill</a>
            </li>
            <li>
              <a href="#">Protfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className={styles.mobile_button}>
            <a href="#">Hire Me</a>
          </div>
                </>
            ):null}
        </div>
      </div>
    </nav>
  );
}
