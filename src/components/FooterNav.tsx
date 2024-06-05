import React from "react";
import { IoLogoOctocat, IoStatsChart } from "react-icons/io5";
import { FaCheckCircle, FaFire } from "react-icons/fa";
import tapswapImage from "../images/tapswap_image.png";
import { useAtom } from "jotai";
import { activeNavAtom } from "../lib/atom";
import { useNavigate, useNavigation } from "react-router-dom";

const FooterNav = () => {
  const router = useNavigate();
  const [activeNav, setActiveNav] = useAtom(activeNavAtom);
  return (
    <div className="flex justify-between gap-4 w-full mt-8 px-4">
      <button
        onClick={() => {
          setActiveNav("ref");
          router("/ref", { replace: true });
        }}
        className={`flex flex-col items-center w-12 bg-blue-900 p-3 bg-opacity-15 rounded-lg ${
          activeNav === "ref" ? "active-nav" : ""
        }`}
      >
        <IoLogoOctocat className="mb-1 text-2xl" />
        <span className="text-sm">Ref</span>
      </button>
      <button
        onClick={() => {
          setActiveNav("task");
          router("/task", { replace: true });
        }}
        className={`flex flex-col items-center w-12 bg-blue-900 p-3 bg-opacity-15 rounded-lg ${
          activeNav === "task" ? "active-nav" : ""
        }`}
      >
        <FaCheckCircle className="mb-1 text-2xl" />
        <span className="text-sm">Task</span>
      </button>
      <button
        onClick={() => {
          setActiveNav("tap");
          router("/tap", { replace: true });
        }}
        className={`flex flex-col items-center w-12 bg-blue-900 p-3 bg-opacity-15 rounded-lg ${
          activeNav === "tap" ? "active-nav" : ""
        }`}
      >
        <img src={tapswapImage} alt="Tap" className="mb-1 w-6" />
        <span className="text-sm">Tap</span>
      </button>
      <button
        onClick={() => {
          setActiveNav("boost");
          router("/boost", { replace: true });
        }}
        className={`flex flex-col items-center w-12 bg-blue-900 p-3 bg-opacity-15 rounded-lg ${
          activeNav === "boost" ? "active-nav" : ""
        }`}
      >
        <FaFire className="mb-1 text-2xl" />
        <span className="text-sm">Boost</span>
      </button>
      <button
        onClick={() => {
          setActiveNav("stats");
          router("/stats", { replace: true });
        }}
        className={`flex flex-col items-center w-12 bg-blue-900 p-3 bg-opacity-15 rounded-lg ${
          activeNav === "stats" ? "active-nav" : ""
        }`}
      >
        <IoStatsChart className="mb-1 text-2xl" />
        <span className="text-sm">Stats</span>
      </button>
    </div>
  );
};

export default FooterNav;
