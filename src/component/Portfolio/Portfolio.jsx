import React from "react";
import styles from "./Portfolio.module.css";
import Tilt from "react-parallax-tilt";
import bookimg from "./image/Screenshot 2024-08-06 023028.jpg"
import dormitoryimg from"./image/dormitory.jpg"
import serverimg from"./image/IMG_8698.jpg"
import broadimg from"./image/IMG_6538.jpg"
import cctvimg from"./image/cctv.jpg"
import appimg from"./image/apple.jpg"
function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>ผลงาน</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src={bookimg}
              alt=""
            />
          </Tilt>
          <p>ระบบจองห้องพักนักศึกษา</p>
        </div>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src={dormitoryimg}
              alt=""
            />
          </Tilt>
          <p>ระบบแจ้งซ่อม</p>
        </div>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src={appimg}
              alt=""
            />
          </Tilt>
          <p>ทำแอฟ ลง ios</p>
        </div>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src={serverimg}
              alt=""
            />
          </Tilt>
          <p>setup ระบบ</p>
        </div>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src={broadimg}
              alt=""
            />
          </Tilt>
          <p>ซ่อมแผงวงจร</p>
        </div>

        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
          <img
              src={cctvimg}
              alt=""
            />
          </Tilt>
          <p>ทำระบบ cctv</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
