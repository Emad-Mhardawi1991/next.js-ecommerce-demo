import Link from "next/link";
import React from "react";
import styles from "./dropDown.module.scss";


const DropDown = ({ icon, href, text, children }) => {
  return (
    <div className={styles.dropDown}>
      <Link href={href || ""} className={styles.dropDown_item}>
        {icon}
        <span>{text}</span>
      </Link>

      <div className={styles.dropDown_menu}>
        <div className={styles.dropDown_menu__space_top}></div>
        <div className={styles.dropDown_menu__content}>{children}</div>
      </div>
    </div>
  );
};

export default DropDown;
