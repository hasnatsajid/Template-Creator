import { useContext, createContext, useState } from 'react';

import initialData from './data/initial-data';

const GlobalContext = createContext({});

export const useGlobal = () => useContext({ GlobalContext });

const ContextProvider = ({ children }) => {
  const [data, setData] = useState(initialData);

  return <GlobalContext.Provider value={(data, setData)}>{children}</GlobalContext.Provider>;
};

export default ContextProvider;
