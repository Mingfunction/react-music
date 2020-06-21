/* ============================================================================= 
#
# Author: Min
# Date: 2020-06-20 17:54:58
# LastEditors: Min
# LastEditTime: 2020-06-20 17:54:59
# Description: file content
#
============================================================================= */

import React, { memo } from "react";
import { newest } from "../../../redux/reducer/discovery/type";
import styles from "./newest.module.scss";
interface Iprops {
  data: newest[];
}

function Newest(props: Iprops) {
  const { data } = props;
  console.log(data);
  return (
    <div className={styles.newest}>
      <ul className={styles.newest_list_warp}>
        {data.splice(0, 5).map((item, index) => (
          <li
            className={styles.newest_list_item}
            key={item.commentThreadId + index}
          >
            <img src={item.blurPicUrl} alt={item.name} />
            {item.name}
          </li>
        ))}
      </ul>
      <ul className={styles.newest_list_warp}>
        {data.splice(0, 5).map((item, index) => (
          <li
            className={styles.newest_list_item}
            key={item.commentThreadId + index}
          >
            <img src={item.blurPicUrl} alt={item.name} />
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default memo(Newest);
