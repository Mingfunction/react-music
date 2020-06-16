import React, { Suspense, lazy } from "react";
import { Redirect } from "react-router-dom";
const Find = lazy(() => import("../pages/find"));

const SuspenseComponent = (Com) => (props) => {
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
    render: () => <Redirect to="find" />,
  },
  {
    path: "/find",
    exact: true,
    component: SuspenseComponent(Find),
  },
];

export default routeArr;
