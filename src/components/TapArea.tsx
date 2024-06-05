import React, { useEffect, useState } from "react";
import tapImage from "../images/tapswap_image.png";
import { useAtom } from "jotai";
import {
  coinsCountAtom,
  maxTapAtom,
  tapCountAtom,
  tapPercentageAtom,
} from "../lib/atom";

import "../App.css";

interface clickType {
  id: number;
  x: number;
  y: number;
  value: string;
}

const TapArea = () => {
  const [clicks, setClicks] = useState<clickType[]>([]);
  const [coinsCount, setCoinsCount] = useAtom(coinsCountAtom);
  const [tapCount, setTapCount] = useAtom(tapCountAtom);
  const [maxTap, setMaxTap] = useAtom(maxTapAtom);
  const [, setTapPercentage] = useAtom(tapPercentageAtom);
  const [perClick] = useState<number>(20);
  const [perRecharge] = useState<number>(1);
  const [rechargeInterval] = useState(1000);
  const [isRefilling, setIsRefilling] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const newClick = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
      value: "+" + perClick,
    };

    if (tapCount <= maxTap && tapCount > 0 && tapCount > perClick) {
      setClicks([...clicks, newClick]);
      setCoinsCount(coinsCount + perClick);
      setTapCount(tapCount - perClick);
      setTapPercentage(((tapCount - perClick) / maxTap) * 100);
    } else {
      if (!isRefilling) {
        const intervalId = setInterval(() => {
          setTapCount((prevVal) => {
            const newCount = prevVal + perRecharge;
            setTapPercentage(((newCount - perRecharge) / maxTap) * 100);
            if (prevVal + perRecharge >= maxTap) {
              clearInterval(intervalId);
              setIsRefilling(false);
              return maxTap;
            }
            return newCount;
          });
        }, rechargeInterval);
        setIsRefilling(true);
      }
    }
  };

  return (
    <div className="mt-8 flex justify-center">
      {clicks.map((click) => (
        <span
          key={click.id}
          className="click-number"
          style={{ left: click.x, top: click.y }}
          onAnimationEnd={() =>
            setClicks((clicks) => clicks.filter((c) => c.id !== click.id))
          }
        >
          {click.value}
        </span>
      ))}

      <img
        onClick={handleClick}
        src={tapImage}
        alt="Coin Image"
        className="w-56 h-56"
      />
    </div>
  );
};

export default TapArea;
