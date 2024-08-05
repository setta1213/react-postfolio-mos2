import React from "react";
import styles from "./Skills.module.css";
import { FaReact, FaSquareJs, FaNode, FaHtml5, FaCss3 } from "react-icons/fa6";
import { BiLogoFlutter } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className={styles.Skills_con}>
      <h3 className={styles.skills_title}>ทักษะพื้นฐาน</h3>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay={true}
        autoPlaySpeed={1500}
      >
        <div>
          <ul className={styles.skills_list}>
            <li>
              <FaReact />
            </li>
          </ul>
        </div>
        <div>
          <ul className={styles.skills_list}>
            <li>
              <BiLogoFlutter />
            </li>
          </ul>
        </div>
        <div>
          <ul className={styles.skills_list}>
            <li>
              <GrMysql />
            </li>
          </ul>
        </div>

        <div>
          <ul className={styles.skills_list}>
            <li>
              <FaNode />
            </li>
          </ul>
        </div>
        <div>
          <ul className={styles.skills_list}>
            <li>
              <FaHtml5 />
            </li>
          </ul>
        </div>
        <div>
          <ul className={styles.skills_list}>
            <li>
              <FaCss3 />
            </li>
          </ul>
        </div>
        
      </Carousel>
    </div>
  );
}

export default Skills;
