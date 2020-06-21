/* ============================================================================= 
#
# Author: Min
# Date: 2020-06-19 10:50:04
# LastEditors: Min
# LastEditTime: 2020-06-19 11:04:16
# Description: 路由管理
#
============================================================================= */
import React, { Suspense, lazy } from "react";
import { Redirect } from "react-router-dom";

const Find = lazy(() => import("../pages/find")),
  Discovery = lazy(() => import("../pages/find/discovery")),
  Djradio = lazy(() => import("../pages/find/djradio")),
  Songlist = lazy(() => import("../pages/find/songlist")),
  Toplist = lazy(() => import("../pages/find/toplist")),
  Artist = lazy(() => import("../pages/find/artist")),
  Album = lazy(() => import("../pages/find/album"));

const SuspenseComponent = (Com: any) => (props: any) => {
  return (
    <Suspense fallback={null}>
      <Com {...props} />
    </Suspense>
  );
};

const routeArr: any[] = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/find" />,
  },
  {
    path: "/find",
    component: SuspenseComponent(Find),
    routes: [
      {
        path: "/find",
        exact: true,
        component: SuspenseComponent(Discovery),
      },
      {
        path: "/find/songlist",
        exact: true,
        component: SuspenseComponent(Songlist),
      },
      {
        path: "/find/djradio",
        exact: true,
        component: SuspenseComponent(Djradio),
      },
      {
        path: "/find/toplist",
        exact: true,
        component: SuspenseComponent(Toplist),
      },
      {
        path: "/find/artist",
        exact: true,
        component: SuspenseComponent(Artist),
      },
      {
        path: "/find/album",
        exact: true,
        component: SuspenseComponent(Album),
      },
    ],
  },
];

export default routeArr;
