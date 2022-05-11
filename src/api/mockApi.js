import { FOOD_ITEMS } from "../data/mockData";

const FAKE_DELAY = 1000;

export const fetchFood = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(FOOD_ITEMS);
    }, FAKE_DELAY);
  });
};
