import React, { useContext } from 'react';
import { observer } from 'mobx-react';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  IconButton,
  Avatar
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

import { Link } from 'react-router-dom';

import { UserStoreContext } from '../../stores/User/UserStore';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    paddingLeft: 14
  },
}))

function Header() {
  const userContext = useContext(UserStoreContext);
  const { name, avatar_url } = userContext;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Avatar alt="User image" src={avatar_url}/>
          <Typography variant="h6" className={classes.title}>
            {name}
          </Typography>
          <Button component={Link} to="/" color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default observer(Header);