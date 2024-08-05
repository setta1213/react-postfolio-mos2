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
            ต้องการเว็บไซต์ที่โดดเด่นและใช้งานง่ายหรือไม่?
            ฉันสามารถช่วยคุณออกแบบและพัฒนาเว็บไซต์ที่ตอบโจทย์และสร้างประสบการณ์ที่ดีให้กับผู้ใช้
          </p>
        </div>
        <div className={styles.service_items}>
          <FaPaintbrush />
          <h4>Web Desing</h4>
          <p>
            ต้องการเว็บไซต์ที่ดูดีและมีฟังก์ชันครบครันหรือไม่?
            ฉันจะช่วยคุณออกแบบเว็บไซต์ที่สวยงามและใช้งานง่าย
            ซึ่งตอบโจทย์ความต้องการของคุณและสร้างประสบการณ์ที่ยอดเยี่ยมให้กับผู้ใช้
          </p>
        </div>
        <div className={styles.service_items}>
          <FaDesktop />
          <h4>Front-End Consulting</h4>
          <p>
            ต้องการคำแนะนำเกี่ยวกับการพัฒนา Front-End ของเว็บไซต์หรือไม่?
            ฉันสามารถช่วยคุณปรับปรุงและเพิ่มประสิทธิภาพประสบการณ์การใช้งานเว็บไซต์ของคุณ
            โดยใช้เทคโนโลยีล่าสุดและแนวปฏิบัติที่ดีที่สุด
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service;
