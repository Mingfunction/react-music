/*
 * @Author: Min
 * @Date: 2020-06-17 17:10:29
 * @LastEditors: Min
 * @LastEditTime: 2020-06-18 15:41:39
 * @Description: 推荐 最新音乐 独家放送等 header + warpper
 * exhibition展览
 */

import React from "react";
import styles from "./exhibition.module.scss";

interface Exhibition {
  title?: string;
}

const Exhibition: React.FC<Exhibition> = (props) => {
  const { title, children } = props;
  return (
    <div className={styles.exhibition}>
      <header>
        <h4>
          {title}
          <span>更多{">"} </span>
        </h4>
      </header>
      {children}
    </div>
  );
};

export default Exhibition;
