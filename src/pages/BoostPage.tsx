import React from "react";
import CoinsDisplay from "../components/CoinsDisplay";
import { FaFire } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import tapswapImage from "../images/tapswap_image.png";

const BoostPage = () => {
  return (
    <>
      <CoinsDisplay page={"boosters"} />
      <div className="mt-10 px-4">
        <hr />
        <div className="text-xl font-bold text-gray-300 mt-8">
          Your daily boosters:
        </div>
        <div className="flex gap-5">
          <div className="flex-1 flex-row bg-cyan-900 p-3 bg-opacity-20 rounded-lg mt-4">
            <div className="flex gap-4">
              <div className="flex">
                <span className="text-3xl">
                  <FaFire />
                </span>
              </div>
              <div className="flex-1">
                <h5 className="text-xs">Tap Guru</h5>
                <span className="text-gray-200">3/3</span>
              </div>
            </div>
          </div>

          <div className="flex-1 flex-row bg-cyan-900 p-3 bg-opacity-20 rounded-lg mt-4">
            <div className="flex gap-4">
              <div className="flex">
                <span className="text-3xl">⚡</span>
              </div>
              <div className="flex-1">
                <h5 className="text-xs">Full Tank</h5>
                <span className="text-gray-200">3/3</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-xl font-bold text-gray-300 mt-8">Boosters:</div>
        <div className="flex gap-5 flex-row bg-cyan-900 p-3 bg-opacity-20 rounded-lg mt-4">
          <div className="flex">
            <span className="text-3xl">✋</span>
          </div>
          <div className="flex-1">
            <h4>Multitap</h4>
            <a
              href="https://t.me/daemon_coder"
              target="blank"
              className="text-gray-200 text-sm"
            >
              <span className="flex mt-4 text-xs gap-2">
                <img src={tapswapImage} alt="Tap" className="mb-1 w-6" /> 2 000
                | level 2
              </span>
            </a>
          </div>
          <div className="flex items-center">
            <span>
              <BiChevronRight />
            </span>
          </div>
        </div>
        <div className="flex gap-5 flex-row bg-cyan-900 p-3 bg-opacity-20 rounded-lg mt-4">
          <div className="flex">
            <span className="text-3xl">🔋</span>
          </div>
          <div className="flex-1">
            <h4>Energy Limit</h4>
            <span className="text-gray-200">
              <span className="flex mt-4 text-xs gap-2">
                <img src={tapswapImage} alt="Tap" className="mb-1 w-6" /> 1 500
                | level 2
              </span>
            </span>
          </div>
          <div className="flex items-center">
            <span>
              <BiChevronRight />
            </span>
          </div>
        </div>
        <div className="flex gap-5 flex-row bg-cyan-900 p-3 bg-opacity-20 rounded-lg mt-4">
          <div className="flex">
            <span className="text-3xl">⚡</span>
          </div>
          <div className="flex-1">
            <h4>Recharging Speed</h4>
            <span className="text-gray-200">
              <span className="flex mt-4 text-xs gap-2">
                <img src={tapswapImage} alt="Tap" className="mb-1 w-6" /> 2 000
                | level 2
              </span>
            </span>
          </div>
          <div className="flex items-center">
            <BiChevronRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default BoostPage;
