/* eslint-disable react/display-name */
import { Card, CardActions, CardContent, CardMedia, Chip, IconButton, makeStyles, Tooltip, Typography } from '@material-ui/core';
import React, { memo } from 'react';
import { Album } from '../../types';
import LaunchIcon from '@material-ui/icons/Launch';
import { useMusic } from '../../contexts/music';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 343,
    margin: 'auto',
    borderRadius: 12,
    padding: 12,
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  media: {
    borderRadius: 6,
    height: 120,
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    paddingBottom: '100%',
  },
  grow: {
    flex: 1,
  }
}));

interface AlbumCard {
  album: Album;
}

const AlbumCard = memo(({ album }: AlbumCard) => {
  const classes = useStyles();
  const { toggleLoveAlbum } = useMusic();

  const handleLoveAlbum = () => {
    toggleLoveAlbum(album.id);
  }

  const handleOpenInAppleMusic = () => {
    window.open(album.appleMusicLink);
  };

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={album.artworkSource} />
      <CardContent>
        <Typography variant="overline">
          {`${album.artist.title} · ${new Date(album.releaseDate).getFullYear()} · ${album.category.title}`}
        </Typography> 
        <Typography>{album.title}</Typography> 
      </CardContent>
      <div className={classes.grow} />
      <CardActions>
        <Chip color="secondary" label={`${album.price.currency} ${album.price.amount}`} />
        <div className={classes.grow} />
        <Tooltip title="Love">
          <IconButton onClick={handleLoveAlbum}>
            {album.loved ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </Tooltip>
        <Tooltip title="Open on Apple Music">
          <IconButton onClick={handleOpenInAppleMusic}>
            <LaunchIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}, (prevProps, nextProps) => 
  prevProps.album.id === nextProps.album.id || prevProps.album.loved === nextProps.album.loved);

export default AlbumCard;
