import React from "react";
import CoinsDisplay from "../components/CoinsDisplay";
import TapArea from "../components/TapArea";
import ProgressBar from "../components/ProgressBar";
import FooterNav from "../components/FooterNav";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <div className="flex-grow w-full">
        <Outlet />
      </div>
      <FooterNav />
    </>
  );
};

export default MainPage;
