/*
 * @Author: Min
 * @Date: 2020-06-16 12:00:39
 * @LastEditors: Min
 * @LastEditTime: 2020-06-18 15:43:42
 * @Description: 顶部header
 */

import React, { useState, memo } from "react";
import styles from "./style.module.scss";
import Github from "./github";

const hover = "hover_bt";

interface IProps {
  className?: string;
}

const Bt: React.FC<IProps> = memo((props) => (
  <span {...props}>
    <span>{props.children}</span>
  </span>
));

function HeaderFrame() {
  const [isMax, setIsMax] = useState();
  return (
    <header className={styles.header_frame}>
      <div className={`${styles.header_logo_warpper}  ${hover}`}></div>
      <div className={styles.routettt_bt_warpper}>
        <Bt className={styles.routettt_bt}></Bt>
        <Bt className={styles.routettt_bt}></Bt>
      </div>
      <div className={styles.input_warpper}></div>
      <div className={styles.set_frame}>
        <i>|</i>
        <span className={hover}></span>
        <span className={hover}></span>
        {isMax ? (
          <span className={hover}></span>
        ) : (
          <span className={hover} onClick={() => {}}></span>
        )}

        <span className={hover}></span>
        <a href="https://github.com/Mingfunction/react-music">
          <Github />
        </a>
      </div>
    </header>
  );
}

export default HeaderFrame;
