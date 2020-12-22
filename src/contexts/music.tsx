import React, { createContext, ReactNode, useContext, useState } from 'react';
import { Album } from '../types';
import { modelAlbumsResponse } from '../utils/functions';
import { useApi } from './api';

interface MusicContext {
  topAlbums: Album[];
  loading: boolean;
  getTopAlbums: (limit: number) => Promise<void>
}

const initialState: MusicContext = {
  topAlbums: [],
  loading: false,
  getTopAlbums: () => new Promise(() => {}),
};

const MusicContext = createContext(initialState);

export const MusicProvider = ({ children }: { children: ReactNode }) => {
  const [topAlbums, setTopAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(false);
  const { fetchAlbums } = useApi();

  const getTopAlbums = async (limit: number) => {
    try {
      setLoading(true);
      setTopAlbums(modelAlbumsResponse((await fetchAlbums(limit)).data));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MusicContext.Provider value={{ topAlbums, loading, getTopAlbums }}>
      {children}
    </MusicContext.Provider>
  )
};

export const useMusic = () => useContext(MusicContext);
