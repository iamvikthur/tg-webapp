import React from "react";
import CoinsDisplay from "../components/CoinsDisplay";
import TapArea from "../components/TapArea";
import ProgressBar from "../components/ProgressBar";

const TapPage = () => {
  return (
    <>
      <CoinsDisplay page="tap" />
      <TapArea />
      <ProgressBar />
    </>
  );
};

export default TapPage;
