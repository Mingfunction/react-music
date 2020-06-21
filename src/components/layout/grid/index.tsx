/* ============================================================================= 
#
# Author: Min
# Date: 2020-06-19 22:11:29
# LastEditors: Min
# LastEditTime: 2020-06-20 01:06:52
# Description: file content
#
============================================================================= */
import React, { memo } from "react";
import styles from "./grid.module.scss";

import Img from "../imgWarp";

interface Iprops {
  data: {
    id: number;
    picUrl: string;
    name: string;
    playCount: number;
    copywriter: string;
  }[];
}

function Grid(props: Iprops) {
  const { data } = props;
  return (
    <div className={styles.grid}>
      {data.map((item, index) => (
        <div key={item.id + index}>
          <div>
            <p className={styles.copywriter}>{item.copywriter}</p>
            <p className={styles.num_of_palys}>
              {parseInt((item.playCount / 10000).toString())}万
            </p>
            <Img src={item.picUrl} alt={item.name} />
            <div className={styles.player} onClick={() => console.log(1)}></div>
          </div>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default memo(Grid);
