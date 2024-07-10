import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "../../components/topBar/TopBar";

const Home = () => {
  return (
    <div>
      <TopBar />

      <Outlet />
    </div>
  );
};

export default Home;
