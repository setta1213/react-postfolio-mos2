import React from "react";
import styles from "./Testimonials.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Tilt from "react-parallax-tilt";
import imgreact from "./image/react.jpg";
import imgjs from "./image/js.jpg"
import imgcss from "./image/css.jpg"
import imgapi from "./image/API.jpg"

function Testimonials() {
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
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}> Certificate</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
          <Carousel
            responsive={responsive}
            infinite
            autoPlay={true}
            autoPlaySpeed={1500}
          >
            <div>
              <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                <img src={imgreact} alt="" />
              </Tilt>
            </div>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src={imgjs} alt="" />
            </Tilt>
            <div>
              <Tilt scale={2.1} transitionSpeed={2500} tiltReverse={true} />
              <img src={imgcss} alt="" />
              <Tilt />
            </div>
            <div>
              <Tilt scale={2.1} transitionSpeed={2500} tiltReverse={true} />
              <img src={imgapi} alt="" />
              <Tilt />
            </div>
            {/* <div>
            
              <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true} />
                <img src={imgreact} alt="" />
                <Tilt/>
              
            </div> */}
            {/* <div>
              <ul className={styles.testi_img}>
                <div className={styles.img2}></div>
              </ul>
            </div>
            <div>
              <ul className={styles.testi_img}>
                <div className={styles.img3}></div>
              </ul>
            </div>

            <div>
              <ul className={styles.testi_img}>
                <div className={styles.img4}></div>
              </ul>
            </div> */}
          </Carousel>
        </div>
        {/* <p>
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
          <p className={styles.bio}>Web Developer</p> */}
      </div>
    </div>
  );
}

export default Testimonials;
