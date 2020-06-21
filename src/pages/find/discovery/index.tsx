/* ============================================================================= 
#
# Author: Min
# Date: 2020-06-19 22:11:25
# LastEditors: Min
# LastEditTime: 2020-06-20 17:51:10
# Description: file content
#
============================================================================= */

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import styles from "./discovery.module.scss";
import Exhibition from "../../../components/layout/exhibition";
import Grid from "../../../components/layout/grid";
import Privatecontent from "../../../components/layout/privatecontent";
import {
  getPersonalized,
  getPrivatecontent,
  getNewest,
} from "../../../redux/actions";
import { discovery_store_type } from "../../../redux/reducer/discovery/type";
import Newest from "../../../components/layout/newest";

interface DiscoveryProps extends RouteComponentProps {
  discovery_store: discovery_store_type;
  getPersonalized: () => void;
  getPrivatecontent: () => void;
  getNewest: () => void;
}

function Discovery(props: DiscoveryProps) {
  console.log(props);

  const [loading, setLoading] = useState<boolean>(true);
  const { personalized, privatecontent, newest } = props.discovery_store;

  useEffect(() => {
    personalized.length === 0 && props.getPersonalized();
    privatecontent.length === 0 && props.getPrivatecontent();
    newest.length === 0 && props.getNewest();
  }, []);

  return (
    <div className={styles.discovery_container}>
      <div className={styles.banner_warpper}></div>
      <Exhibition title={"推荐歌单"}>
        <Grid data={personalized} />
      </Exhibition>
      <Exhibition title={"独家放送"}>
        <Privatecontent data={privatecontent} />
      </Exhibition>
      <Exhibition title={"最新音乐"}>
        <Newest data={newest} />
      </Exhibition>
      <Exhibition title={"独家放送"}>
        <Privatecontent data={privatecontent} />
      </Exhibition>
      <Exhibition title={"独家放送"}>
        <Privatecontent data={privatecontent} />
      </Exhibition>
    </div>
  );
}

const mapStateToProps = (state): { discovery_store: discovery_store_type } => {
  // console.log(state);
  return {
    discovery_store: state.discovery_store,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getPersonalized: () => dispatch(getPersonalized()),
  getPrivatecontent: () => dispatch(getPrivatecontent()),
  getNewest: () => dispatch(getNewest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Discovery);
