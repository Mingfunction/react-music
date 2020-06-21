/* ============================================================================= 
#
# Author: Min
# Date: 2020-06-20 15:44:50
# LastEditors: Min
# LastEditTime: 2020-06-20 15:44:50
# Description: 独家放送
#
============================================================================= */

import React, { Fragment, memo } from "react";
import styles from "./privatecontent.module.scss";
import { privatecontent } from "../../../redux/reducer/discovery/type";

interface Iprops {
  data: privatecontent[];
}

function Privatecontent(props: Iprops) {
  // console.log(props);
  const { data } = props;
  return (
    <div className={styles.privatecontent}>
      {data.map((item, index) => (
        <Fragment key={item.alg + index}>
          <div>
            <img src={item.sPicUrl} alt="" />
            <p> {item.name}</p>
          </div>
        </Fragment>
      ))}
    </div>
  );
}

export default memo(Privatecontent);
