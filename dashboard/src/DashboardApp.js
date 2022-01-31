import React, { useEffect, useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AccessTokenPanel from './component/AccessTokenPanel';
import './css/App.css';
import reducer from './Reducer';
import routes from "./routes"


function DashboardApp(props) {
  const { store } = props;
  return (
    <Provider store={store}>
      <AccessTokenPanel />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes location={location}>
            {routes.map(r => (
              <Route key={r.path} path={r.path} element={React.createElement(r.component)} />
            ))}
          </Routes>
        </Router>
      </React.Suspense>
    </Provider>
  );
}
export default DashboardApp;
