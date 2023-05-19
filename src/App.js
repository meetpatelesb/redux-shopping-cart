import React from "react";
import  HomeContainer from './containers/HomeContainer'
import { userData } from "./utils/constant";
import './assets/styles/common.css';
const App = () => {
  return (
    <>
    <div className="app">

      <HomeContainer data={userData} />
    </div>
    </>
  );
};

export default App;
