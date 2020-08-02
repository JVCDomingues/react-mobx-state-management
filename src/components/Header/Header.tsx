import React, { useContext } from 'react';
import { observer } from 'mobx-react';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  Avatar
} from '@material-ui/core';

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
          <Avatar alt="User image" src={avatar_url}/>
          <Typography variant="h6" className={classes.title}>
            {name}
          </Typography>
          <Button component={Link} to="/" color="inherit" onClick={() => localStorage.removeItem('username')}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default observer(Header);