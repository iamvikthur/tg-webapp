import React, { useState } from "react";
import { maxTapAtom, tapCountAtom, tapPercentageAtom } from "../lib/atom";
import { useAtom } from "jotai";

const ProgressBar = () => {
  const [maxTap, setMaxTap] = useAtom(maxTapAtom);
  const [tapCount, setTapCount] = useAtom(tapCountAtom);
  const [tapPercentage, setTapPercentage] = useAtom(tapPercentageAtom);

  return (
    <div className="mt-16 px-5">
      <div className="relative bg-blue-900 p-1 bg-opacity-20 rounded-lg">
        <div className="overflow-hidden h-3 text-xs flex bg-gray-200 rounded-lg">
          <div
            style={{ width: tapPercentage + "%" }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-400"
          ></div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-2 ">
        <span>
          ⚡ {tapCount}/{maxTap}
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
