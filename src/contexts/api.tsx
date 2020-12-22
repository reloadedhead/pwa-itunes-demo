import React, { createContext, ReactNode, useContext } from 'react';
import axios, { AxiosPromise } from 'axios';

interface ApiContext {
  fetchAlbums: (limit: number) => AxiosPromise;
}

const initialState: ApiContext = {
  fetchAlbums: () => new Promise(() => {}),
};

const ApiContext = createContext(initialState);

export const ApiProvider = ({ children }: { children: ReactNode }) => {
  
  const fetchAlbums = (limit = 100) => {
    return axios.get(`https://itunes.apple.com/us/rss/topalbums/limit=${limit}/json`);
  }

  return (
    <ApiContext.Provider value={{ fetchAlbums }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => useContext(ApiContext);
