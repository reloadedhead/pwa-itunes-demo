import { Card, CardActions, CardContent, CardMedia, Chip, IconButton, makeStyles, Tooltip, Typography } from '@material-ui/core';
import React from 'react';
import { Album } from '../../types';
import LaunchIcon from '@material-ui/icons/Launch';

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

const AlbumCard = ({ album }: AlbumCard) => {
  const classes = useStyles();

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
        <Chip label={`${album.price.currency} ${album.price.amount}`} />
        <div className={classes.grow} />
        <Tooltip title="Open on Apple Music">
          <IconButton onClick={handleOpenInAppleMusic}>
            <LaunchIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default AlbumCard;
