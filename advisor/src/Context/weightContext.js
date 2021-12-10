import React from 'react';
import {createContext} from 'react';
export const WContext = createContext();

const WeightContext = props => {
  const value = {weight: 0};

  return <WContext.Provider value={value}>{props.children}</WContext.Provider>;
};

export default WeightContext;
