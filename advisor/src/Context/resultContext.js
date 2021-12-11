import React, {useEffect, useState} from 'react';
import {createContext} from 'react';

export const ResultContext = createContext({
  resultPoint: {result: 0},
  resultDispatch: () => {},
});

const ResultProvider = ({children}) => {
  //   const result = {weight: 0};
  const [result, setResult] = useState(0);
  const value = {resultPoint: {result}, resultDispatch: setResult};

  return (
    <ResultContext.Provider value={value}>{children}</ResultContext.Provider>
  );
};

const ResultConsumer = ResultContext.Consumer;

export {ResultProvider, ResultConsumer};
export default ResultContext;
