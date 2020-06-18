/*
 * @Author: Min
 * @Date: 2020-06-17 14:38:19
 * @LastEditors: Min
 * @LastEditTime: 2020-06-18 15:58:34
 * @Description: file content
 */

import React, { useCallback, useEffect, useState } from "react";

import { RouteComponentProps } from "react-router";
import axios from "axios";
import styles from "./discovery.module.scss";
import Exhibition from "../../../components/layout/exhibition";
import Grid from "../../../components/layout/grid";

interface DiscoveryProps extends RouteComponentProps {}

function Discovery(props: DiscoveryProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [personalized, setPersonalized] = useState<any[]>([]);

  const api = useCallback(async () => {
    const bannerdata = await axios.get("api/banner");
    const personalized = await axios.get("api/personalized?limit=10");
    setPersonalized(personalized.data.result);
  }, []);

  useEffect(() => {
    api();
  }, []);

  return (
    <div className={styles.discovery_container}>
      <Exhibition title={"推荐歌单"}>
        <Grid data={personalized} />
      </Exhibition>
    </div>
  );
}

export default Discovery;
