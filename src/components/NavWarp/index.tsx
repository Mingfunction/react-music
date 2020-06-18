import React, { memo } from "react";
import FreeScrollBar from "react-free-scrollbar";
import { withRouter } from "react-router-dom";
import styles from "./nav_warp.module.scss";
import Nav from "./nav";
import { RouteComponentProps } from "react-router";

function NavWarp(props: RouteComponentProps) {
  const setRoute = (key: string) => {
    props.history.push(key);
  };
  return (
    <nav className={styles.nav_routes_warpper}>
      <FreeScrollBar className="example">
        <Nav title="推荐" defaultkey="/find" onCilck={setRoute}>
          <Nav.Item keys={"/find"}>发现音乐</Nav.Item>
          <Nav.Item keys={"/fm"}>私人FM</Nav.Item>
          <Nav.Item keys={"/live"}>LOOK直播</Nav.Item>
          <Nav.Item keys={"/video"}>视频</Nav.Item>
          <Nav.Item keys={"/friend"}>朋友</Nav.Item>
        </Nav>
      </FreeScrollBar>
    </nav>
  );
}

export default memo(withRouter(NavWarp));
