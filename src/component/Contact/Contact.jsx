import React from "react";
import styles from "./Contact.module.css";
import { FaPhone, FaEnvelope } from "react-icons/fa6";
function Contact() {
  return (
    <div className={styles.contact_wrapper}>
      <div className={styles.contact_con}>
        <div className={styles.contact_info}>
          <h3> Get in Touch</h3>
          <p className={styles.contact_desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui,
            beatae expedita. Impedit doloremque, amet aut excepturi sint veniam
            officiis placeat, quas ipsam sunt, libero aspernatur possimus
            voluptatum omnis. Quasi, neque!
          </p>
          <p className={styles.contact_address}>
            123 Main Street <br />
            Bangkok, Thailand
          </p>
          <p>
            <FaPhone /> (+66)98 555 1234
          </p>
          <p>
            <FaEnvelope /> som78542@gmail.com
          </p>
        </div>
        <div className={styles.contact_form}>
          <form action="">
            <div className={styles.input_group}>
              <dir>
                <label htmlFor="First name">Frist Name</label>
                <input type="text" placeholder="eg.John" />
              </dir>
              <dir>
                <label htmlFor="Last name">Last Name</label>
                <input type="text" placeholder="eg.Do" />
              </dir>
            </div>
            <label htmlFor="Email address">Email Address</label>
            <input type="email" placeholder="eg. johndoe@gmail.com" />
            <label htmlFor="Message">Your Message</label>
            <textarea name="" id="" placeholder="Type here"></textarea>
            <button type="sunmit">sunmit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
