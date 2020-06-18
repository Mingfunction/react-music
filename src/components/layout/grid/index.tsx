import React from "react";
import styles from "./grid.module.scss";

import Img from "../imgWarp";

interface Iprops {
  data: {
    id: number;
    picUrl: string;
    name: string;
  }[];
}

function Grid(props: Iprops) {
  const { data } = props;
  return (
    <div className={styles.grid}>
      {data.map((item, index) => (
        <div key={item.id + index}>
          <div>
            <Img src={item.picUrl} alt={item.name} />
          </div>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Grid;
