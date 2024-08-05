import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FaBars } from "react-icons/fa6";

export default function Navbar({
  scrollToSkills,
  scrollToService,
  scrollToContact,
}) {
  const [isToggled, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!isToggled);
  };
  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.nav_con}>
          <div className={styles.logo}>
            <a href="#">มอสครับ</a>
          </div>
          <ul>
            <li>
              <a href="#" onClick={scrollToSkills}>
                ทักษะ
              </a>
            </li>
            <li>
              <a href="#" onClick={scrollToService}>
                ผลงาน
              </a>
            </li>
            <li>
              <a href="#" onClick={scrollToContact}>
                ติดต่อ
              </a>
            </li>
          </ul>
          <div className={styles.button}>
            <a href="#" onClick={scrollToContact}>
              จ้างผม
            </a>
          </div>
        </div>

        <div>
          {/* {moblie menu} */}
          <FaBars className={styles.bars} onClick={handleToggle} />
          {isToggled ? (
            <>
              <ul className={styles.mobile_menu}>
                <li>
                  <a href="#" onClick={scrollToSkills}>
                    ทักษะ
                  </a>
                </li>
                <li>
                  <a href="#" onClick={scrollToService}>
                    ผลงาน
                  </a>
                </li>
                <li>
                  <a href="#" onClick={scrollToContact}>
                    ติดต่อ
                  </a>
                </li>
              </ul>
              <div className={styles.mobile_button}>
                <a href="#" onClick={scrollToContact}>
                  จ้างผม
                </a>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
