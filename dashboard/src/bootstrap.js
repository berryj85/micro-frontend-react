import React from "react";
import ReactDOM from 'react-dom';
import './css/index.css';
import DashboardApp from './DashboardApp'
import Store from "./store";

ReactDOM.render(<DashboardApp store={Store} />,document.getElementById('root'));