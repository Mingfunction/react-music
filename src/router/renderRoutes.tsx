/* ============================================================================= 
#
# Author: Min
# Date: 2020-06-19 10:50:04
# LastEditors: Min
# LastEditTime: 2020-06-19 11:04:41
# Description: 路由权鉴
#
============================================================================= */
import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

interface IProps {
  routes: {
    path: string;
    key?: string;
    exact?: boolean;
    strict?: any;
    render?: () => React.FC;
    requiresAuth?: string;
    component: React.FC;
  }[];
  authed?: any;
  authPath?: string;
  extraProps?: any;
  switchProps?: any;
}

const renderRoutes = (props: IProps) => {
  // console.log(props);
  const {
    routes,
    authed,
    authPath = "/login",
    extraProps = {},
    switchProps = {},
  } = props;
  return routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={
            route.render ||
            ((props) => {
              if (!route.requiresAuth || authed || route.path === authPath) {
                return (
                  <route.component {...props} {...extraProps} route={route} />
                );
              }
              return (
                <Redirect
                  to={{ pathname: authPath, state: { from: props.location } }}
                />
              );
            })
          }
        />
      ))}
    </Switch>
  ) : null;
};

export default renderRoutes;
