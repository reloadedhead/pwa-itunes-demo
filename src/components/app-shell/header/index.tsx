import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import LovedPopover from './loved';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleOpenFavourites = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseFavourites = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Top Albums
          </Typography>
          <IconButton 
            edge="start"
            className={classes.menuButton} 
            color="inherit" 
            aria-label="menu" 
            onClick={handleOpenFavourites}
          >
            <FavoriteIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <LovedPopover anchorEl={anchorEl} handleClose={handleCloseFavourites} />
    </div>
  );
}

export default Header;