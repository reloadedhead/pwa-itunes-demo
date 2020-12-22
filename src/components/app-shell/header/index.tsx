import React, { ChangeEvent, useState } from 'react';
import { createStyles, fade, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import LovedPopover from './loved';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import FilteredPopover from './filtered';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }),
);

const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [searchAnchorEl, setSearchAnchorEl] = useState<HTMLTextAreaElement | HTMLInputElement | null>(null);
  const [filterTerm, setFilterTerm] = useState('');

  const handleOpenFavourites = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseFavourites = () => {
    setAnchorEl(null);
  };

  const handleSearchInput = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (event.currentTarget.value === '') {
      handleCloseFilteredPopover();
    } else {
      setSearchAnchorEl(event.currentTarget);
    }
    setFilterTerm(event.currentTarget.value);
  };

  const handleCloseFilteredPopover = () => {
    setSearchAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            Top Albums
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..."
              onChange={handleSearchInput}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
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
      <FilteredPopover 
        anchorEl={searchAnchorEl} 
        handleClose={handleCloseFilteredPopover} 
        filterTerm={filterTerm} 
      />
    </div>
  );
}

export default Header;