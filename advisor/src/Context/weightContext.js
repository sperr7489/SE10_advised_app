import React, {useState} from 'react';
import {createContext} from 'react';

export const WContext = createContext();

const WeightContext = props => {
  const [medal, setMedal] = useState(-1);
  const value = {weight: 0, result: 0, medal: medal, dispatch: setMedal};
  //   const result = {weight: 0};
  return <WContext.Provider value={value}>{props.children}</WContext.Provider>;
};

export default WeightContext;
