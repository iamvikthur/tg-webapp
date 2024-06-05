import { atom } from "jotai";

const tapmax = 1000;

export const coinsCountAtom = atom(0);
export const maxTapAtom = atom(tapmax);
export const tapCountAtom = atom<number>(tapmax);
export const tapPercentageAtom = atom(100);

export const activeNavAtom = atom("tap");

export const totalTouchesAtom = atom(0);
export const totalCoinsAtom = atom(0);

const levels = [
  {
    name: "Newbie",
    maxTap: 1000,
    maxCoins: 5000,
    minCoins: 0,
    perTap: 2,
    refill: 4,
  },
  {
    name: "Kriyo",
    maxTap: 1500,
    maxCoins: 10000,
    minCoins: 5000,
    perTap: 3,
    refill: 3,
  },
  {
    name: "Daemon",
    maxTap: 2000,
    maxCoins: 20000,
    minCoins: 10000,
    perTap: 4,
    refill: 2,
  },
  {
    name: "REBEL",
    maxTap: 2500,
    maxCoins: 50000,
    minCoins: 20000,
    perTap: 5,
    refill: 1,
  },
];

const startIndex = 0;
export const currentIndexAtom = atom(startIndex);
export const appLevelsAtom = atom(levels);
export const currentLevelAtom = atom(levels[startIndex]);
