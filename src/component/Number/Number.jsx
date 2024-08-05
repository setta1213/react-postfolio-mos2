import React from "react";
import styles from "./Number.module.css";
import Countup from "react-countup";
import { useInView } from 'react-intersection-observer';

function Number() {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div className={styles.number_con}>
      <div className={styles.number_items}>
        <h3 ref={ref1}>
          {inView1 ? <Countup start={0} end={20} duration={5} /> : null}+
        </h3>
        <p>งานที่ที่สำเร็จไปแล้ว</p>
      </div>
      <div className={styles.number_items}>
        <h3 ref={ref2}>
          {inView2 ? <Countup start={0} end={50} duration={5} /> : null}+
        </h3>
        <p>Project Helped</p>
      </div>
      <div className={styles.number_items}>
        <h3 ref={ref3}>
          {inView3 ? <Countup start={0} end={9} duration={5} /> : null}+ ปี
        </h3>
        <p>ประสบการณ์</p>
      </div>
      <div className={styles.number_items}>
        <h3 ref={ref4}>
          {inView4 ? <Countup start={0} end={50} duration={5} /> : null}+
        </h3>
        <p>ความพอใจของลูกค้า</p>
      </div>
    </div>
  );
}

export default Number;
