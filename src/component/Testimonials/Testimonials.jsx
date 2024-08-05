import React from "react";
import styles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quos
            alias ea. Ullam reprehenderit recusandae aperiam voluptatibus
            delectus, amet et! Beatae dolorum consectetur ullam quia nostrum
            vero, corporis sunt minus.
          </p>
          <img
            src="https://plus.unsplash.com/premium_photo-1669065123832-5c43e8f80f46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8fDB8fHww"
            alt=""
          />
       
        <h4>John doe</h4>
        <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quos
            alias ea. Ullam reprehenderit recusandae aperiam voluptatibus
            delectus, amet et! Beatae dolorum consectetur ullam quia nostrum
            vero, corporis sunt minus.
          </p>
          <img
            src="https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <h4>Jan doe</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quos
            alias ea. Ullam reprehenderit recusandae aperiam voluptatibus
            delectus, amet et! Beatae dolorum consectetur ullam quia nostrum
            vero, corporis sunt minus.
          </p>
          <img
            src="https://images.unsplash.com/photo-1561688711-a98d0cfd30a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <h4>Joe doe</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
