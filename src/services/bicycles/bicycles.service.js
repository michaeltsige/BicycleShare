import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export const bicyclesRequest = (location = "hits") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const bicyclesTransform = ({ results = [] }) => {
  const mappedResults = results.map((bicycle) => {
    bicycle.photos = bicycle.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });

    return {
      ...bicycle,
      isOpenNow: true,
      isClosedTemporarily: false
    };
  });

  return camelize(mappedResults);
};
