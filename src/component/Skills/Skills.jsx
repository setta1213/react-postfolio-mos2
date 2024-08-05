import React from 'react'
import styles from './Skills.module.css'
import {FaReact,FaSquareJs,FaSass,FaGitAlt,FaNode} from 'react-icons/fa6' 
function Skills() {
  return (
    <div className={styles.Skills_con}>
        <h3 className={styles.skills_title}>My skill set</h3>
        <ul className={styles.skills_list}>
            <li>
                <FaSquareJs />
            </li>
            <li>
                <FaReact />
            </li>
            <li>
                <FaSass/>
            </li>
            <li>
                <FaGitAlt/>
            </li>
            <li>
                <FaNode/>
            </li>
        </ul>
    </div>
  )
}

export default Skills
