import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import AlbumCard from '../../components/album-card';
import { useMusic } from '../../contexts/music';

const TopAlbums = () => {
  const { getTopAlbums, topAlbums } = useMusic();

  useEffect(() => {
    getTopAlbums(100);
    return () => {
      console.log('unmount');
    }
  }, []);

  return (
    <Grid container spacing={1} direction="row" justify="flex-start">
      {topAlbums.map(album => (
        <Grid item sm={3} xs={12} key={album.id}>
          <AlbumCard album={album} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TopAlbums;
