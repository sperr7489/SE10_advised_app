import React, {useEffect, useState} from 'react';
import {createContext} from 'react';

export const WeightContext = createContext({
  weightPoint: {weight: 0},
  weightDispatch: () => {},
});

const WeightProvider = ({children}) => {
  //   const result = {weight: 0};
  const [weight, setWeight] = useState(0);
  const value = {weightPoint: {weight}, weightDispatch: setWeight};

  return (
    <WeightContext.Provider value={value}>{children}</WeightContext.Provider>
  );
};

const WeightConsumer = WeightContext.Consumer;

export {WeightProvider, WeightConsumer};
export default WeightContext;
