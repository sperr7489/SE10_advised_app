import React, {useEffect, useState} from 'react';
import {createContext} from 'react';

export const MedalContext = createContext({
  medalPoint: {medal: -1},
  medalDispatch: () => {},
});

const MedalProvider = ({children}) => {
  //   const result = {weight: 0};
  const [medal, setMedal] = useState(-1);
  const value = {medalPoint: {medal}, medalDispatch: setMedal};

  return (
    <MedalContext.Provider value={value}>{children}</MedalContext.Provider>
  );
};

const MedalConsumer = MedalContext.Consumer;

export {MedalProvider, MedalConsumer};
export default MedalContext;
