import React from 'react';
import './css/App.css';
import DashboardApp from 'dashboard/DashboardApp';
import { Provider } from 'react-redux'
import Store from './store';
import GenerateTokenButton from './component/GenerateTokenButton';


function ContainerApp() {

  return (
    <Provider store={Store}>
      <GenerateTokenButton />
      <DashboardApp store={Store} />
    </Provider>
  );

}
export default ContainerApp;