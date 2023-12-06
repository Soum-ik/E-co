import styles from "../Styles/style";
import React from "react";

function NavMenu({ item, icon }) {
  return (
    <li className={`${styles.flexCenter} gap-1 `}>
      {item}
      {icon}
    </li>
  );
}

export default NavMenu;
