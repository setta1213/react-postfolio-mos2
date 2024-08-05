import React from "react";
import styles from "./Service.module.css";
import { FaCode, FaPaintbrush, FaDesktop } from "react-icons/fa6";

function Service() {
  return (
    <div className={styles.service_con}>
      <h3 className={styles.service_title}>My Services</h3>
      <div className={styles.service_list}>
        <div className={styles.service_items}>
          <FaCode />
          <h4>Web Development</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
            soluta harum fugiat amet mollitia iusto blanditiis, eos ab sunt
            accusantium consectetur error autem labore ipsa non iste sint
            cupiditate! Quis!
          </p>
        </div>
        <div className={styles.service_items}>
          <FaPaintbrush />
          <h4>Web Desing</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
            soluta harum fugiat amet mollitia iusto blanditiis, eos ab sunt
            accusantium consectetur error autem labore ipsa non iste sint
            cupiditate! Quis!
          </p>
        </div>
        <div className={styles.service_items}>
          <FaDesktop />
          <h4>Front-End Consulting</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
            soluta harum fugiat amet mollitia iusto blanditiis, eos ab sunt
            accusantium consectetur error autem labore ipsa non iste sint
            cupiditate! Quis!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service;
