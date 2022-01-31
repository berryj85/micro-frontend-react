import React from "react";
import DashboardContainer from "./container/DashboardContainer";
import WidgetContainer from "./container/WidgetContainer";
const routes = [
  {
    path: '/',
    component: DashboardContainer,
    exact: false,
  },
  {
    path: '/widgets',
    component: WidgetContainer,
    exact: false,
  },
  
]
export default routes;