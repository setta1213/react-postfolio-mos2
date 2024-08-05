import React from "react";
import styles from "./Hero.module.css";
import {  FaFacebookF } from "react-icons/fa6";
import { FaLine } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_con}>
          <div className={styles.hero_info}>
            <p className={styles.text_1}>สวัสดีครับ ผม</p>
            <h3 className={styles.text_2}>เศรษฐา ตระการกิจ</h3>
            <p className={styles.text_3}>
              <span style={{ marginRight: "10px" }}>ผมคือ</span>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Front-end Developer",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Web Developer",
                  1000,
                  "IT Support ",
                  1000,
                  "Back-End",
                  1000,
                ]}
                speed={50}
                // style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
            </p>
            <p className={styles.text_4}>
              ผมคือนักพัฒนา Front-End และ IT Support
              ด้วยความสามารถในการสร้างอินเตอร์เฟสที่สวยงามและใช้งานง่าย
              รวมถึงการให้การสนับสนุนทางเทคนิคและการจัดการระบบ Back-End
              เพื่อให้การทำงานของคุณราบรื่นและมีประสิทธิภาพ
            </p>
            <ul className={styles.hero_social}>
              <li>
                <a href="">
                 
                </a>
              </li>
              <li>
                <a href="https://line.me/ti/p/_r_ZDVUIRN#~">
                  <FaLine />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/settatrakenkit/">
                  <FaFacebookF></FaFacebookF>
                </a>
              </li>
            </ul>
          </div>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <div className={styles.hero_img}></div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default Hero;
