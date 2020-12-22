import { 
  createStyles,
  List,
  ListItem, 
  ListItemText, 
  makeStyles, 
  Popover, 
  Theme, 
  Typography, 
  ListItemAvatar,
  Avatar,
  IconButton,
  ListItemSecondaryAction
} from '@material-ui/core';
import React from 'react';
import { useMusic } from '../../../contexts/music';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      padding: theme.spacing(2),
    },
    root: {
      maxHeight: 600,
    },
    avatar: {
      borderRadius: 6,
    },
    listItem: {
      maxWidth: 350,
    },
    unloveButton: {
      marginLeft: 15,
    },
  }),
);

interface LovedPopover {
  handleClose: () => void;
  anchorEl: HTMLButtonElement | null;
}

const LovedPopover = ({ handleClose, anchorEl }: LovedPopover) => {
  const classes = useStyles();
  const { topAlbums, toggleLoveAlbum } = useMusic();
  const lovedAlbums = topAlbums.filter(a => a.loved);

  const handleOpenAlbum = (link: string) => {
    window.open(link);
  };

  const handleUnloveAlbum = (id: string) => {
    toggleLoveAlbum(id);
  };

  return (
    <Popover
      className={classes.root}
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      {lovedAlbums.length > 0 ? (
        <List>
          {lovedAlbums.map(a => (
            <ListItem 
              key={`fav-${a.id}`} 
              className={classes.listItem} 
              button 
              onClick={() => handleOpenAlbum(a.appleMusicLink)}
            >
              <ListItemAvatar>
                <Avatar className={classes.avatar} variant="square" src={a.artworkSource} />
              </ListItemAvatar>
              <ListItemText primary={a.title} secondary={a.artist.title} />
              <ListItemSecondaryAction className={classes.unloveButton}>
                <IconButton onClick={() => handleUnloveAlbum(a.id)}>
                  <CloseIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      ): (
        <Typography className={classes.typography}>No Loved Albums Yet!</Typography>
      )}
    </Popover>
  );
};

export default LovedPopover;
