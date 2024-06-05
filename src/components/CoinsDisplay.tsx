import { useAtom } from "jotai";
import React, { useState } from "react";
import { appLevelsAtom, coinsCountAtom, currentLevelAtom } from "../lib/atom";
import { BiChevronRight } from "react-icons/bi";
import tapswapImage from "../images/tapswap_image.png";

interface ComponentProps {
  page: string;
}

const CoinsDisplay: React.FC<ComponentProps> = ({ page }) => {
  const [coinsCount, setCoinsCount] = useAtom(coinsCountAtom);
  const [levels, setLevels] = useAtom(appLevelsAtom);
  const [level, setLevel] = useAtom(currentLevelAtom);

  return (
    <div className="flex flex-col items-center mt-8">
      {page === "boosters" && (
        <span className="text-neutral-400 text-sm">Your share balance</span>
      )}
      <div className="flex items-center space-x-2">
        <img src={tapswapImage} alt="Tap" className="mb-1 w-6" />
        <span className="text-4xl font-bold">
          {coinsCount.toLocaleString().replace(",", " ")}
        </span>
      </div>
      {page !== "boosters" && (
        <div className="flex items-center text-neutral-400 mt-2">
          <span className="text-lg font-semibold">{level.name}</span>
          &nbsp;
          <BiChevronRight className="mt-1" />
        </div>
      )}
    </div>
  );
};

export default CoinsDisplay;
