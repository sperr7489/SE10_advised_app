import React from 'react';
import {MedalProvider} from '../medalContext';
import {ResultProvider} from '../resultContext';
import {WeightProvider} from '../weightContext';

const GlobalProvider = ({children}) => {
  return (
    <WeightProvider>
      <ResultProvider>
        <MedalProvider>{children}</MedalProvider>
      </ResultProvider>
    </WeightProvider>
  );
};
export default GlobalProvider;
