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
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      padding: theme.spacing(2),
    },
    root: {
      maxHeight: 400,
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

interface FilteredPopover {
  handleClose: () => void;
  anchorEl: HTMLInputElement | HTMLTextAreaElement | null;
  filterTerm: string;
}

const FilteredPopover = ({ handleClose, anchorEl, filterTerm }: FilteredPopover) => {
  const classes = useStyles();
  const { topAlbums, toggleLoveAlbum } = useMusic();
  const filteredAlbums = topAlbums.filter(a => a.title.includes(filterTerm));

  const handleOpenAlbum = (link: string) => {
    window.open(link);
  };

  const handleUnloveAlbum = (id: string) => {
    toggleLoveAlbum(id);
  };

  return (
    <Popover
      disableAutoFocus
      disableEnforceFocus
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
      {filteredAlbums.length > 0 ? (
        <List>
          {filteredAlbums.map(a => (
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
                  {a.loved ? <FavoriteIcon /> : <FavoriteBorderIcon />}
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

export default FilteredPopover;
