/*
 * @Author: Min
 * @Date: 2020-06-16 16:55:05
 * @LastEditors: Min
 * @LastEditTime: 2020-06-20 18:50:51
 * @Description: file content
 */

import React, { useState } from "react";
import styles from "./find.module.scss";
import renderRoutes from "../../router/renderRoutes";
import { RouteComponentProps } from "react-router";

interface FindProps extends RouteComponentProps {
  route?: any;
}

function Find(props: FindProps) {
  const {
    route: { routes },
  } = props;
  const [current, setCurrent] = useState<string>(
    props.history.location.pathname.split("/")[2]
  );
  const navArr = [
    { text: "个性推荐", value: "discovery" },
    { text: "歌单", value: "songlist" },
    { text: "主播电台", value: "djradio" },
    { text: "排行榜", value: "toplist" },
    { text: "歌手", value: "artist" },
    { text: "最新音乐", value: "album" },
  ];

  const handleClick = (value: string) => {
    setCurrent(value);
    props.history.push(`/find/${value === "discovery" ? "" : value}`);
  };

  return (
    <div className={styles.find_page}>
      <div className={styles.find_nav_warpper}>
        <ul className={styles.find_nav}>
          {navArr.map((item, key) => (
            <li
              key={item.value + key}
              className={
                current === item.value
                  ? styles.find_nav_item_active
                  : styles.find_nav_item
              }
              onClick={handleClick.bind(null, item.value)}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.find_container_warp}>
        {renderRoutes({ routes })}
      </div>
    </div>
  );
}

export default Find;
