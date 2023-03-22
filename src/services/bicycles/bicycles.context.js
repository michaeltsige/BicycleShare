import React, { useState, useContext, createContext, useEffect } from "react";

import {
  bicyclesRequest,
  bicyclesTransform,
} from "./bicycles.service";

import { LocationContext } from "../location/location.context";

export const BicyclesContext = createContext();

export const BicyclesContextProvider = ({ children }) => {
  const [bicycles, setBicycles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const { location } = useContext(LocationContext);

  const retrieveBicycles = (loc) => {
    setIsLoading(true);
    setBicycles([]);

    setTimeout(() => {
      bicyclesRequest(loc)
        .then(bicyclesTransform)
        .then((results) => {
          setIsLoading(false);
          setBicycles(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 1000);
  };
  // useEffect(() => {
  //   if (location) {
  //     const locationString = `${location.lat},${location.lng}`;
  //     retrievebicycles(locationString);
  //   }
  // }, [location]);

  useEffect(() => {
    retrieveBicycles();
  }, []);

  return (
    <BicyclesContext.Provider
      value={{
        bicycles,
        isLoading,
        error,
      }}
    >
      {children}
    </BicyclesContext.Provider>
  );
};
