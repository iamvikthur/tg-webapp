import { useAtom } from "jotai";
import React from "react";
import { totalCoinsAtom, totalTouchesAtom } from "../lib/atom";

const StatsPage = () => {
  const [totalTouches] = useAtom(totalTouchesAtom);
  const [totalCoins] = useAtom(totalCoinsAtom);
  return (
    <>
      <div className="container mx-auto p-4 flex flex-col items-center mt-10">
        <p className="mt-2 text-md text-gray-400">Total Share Balance</p>
        <h1 className="text-3xl text-gray-300 font-bold">
          {totalCoins.toLocaleString().replace(",", " ")}
        </h1>

        <div className="mt-8 text-center">
          <p className="text-md text-gray-400">Total Touches:</p>
          <p className="text-xl text-gray-300 font-bold">
            {totalTouches.toLocaleString().replace(",", " ")}
          </p>
        </div>

        <div className="mt-4 text-center">
          <p className="text-md text-gray-400">Total Players:</p>
          <p className="text-xl text-gray-300 font-bold">Just you champ 🥷🏻</p>
        </div>

        <div className="mt-4 text-center">
          <p className="text-md text-gray-400">Daily Users:</p>
          <p className="text-xl text-gray-300 font-bold">1 (just you 😎)</p>
        </div>

        <div className="mt-4 text-center">
          <p className="text-md text-gray-400">Online Players:</p>
          <p className="text-xl text-gray-300 font-bold">Obviously you 😁 </p>
        </div>
      </div>
    </>
  );
};

export default StatsPage;
