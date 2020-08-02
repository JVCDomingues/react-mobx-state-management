import React, { useState, useContext } from 'react';

import { UserStoreContext } from '../../stores/User/UserStore';

import {
  Grid,
  Paper,
  Typography,
  Button,
  TextField,
  makeStyles
} from '@material-ui/core';

import { Link } from 'react-router-dom';

import logo from '../../assets/img/github-logo.png';

const useStyles = makeStyles(() => ({
  paper: {
    padding: 10,
    width: 300
  },
  title: {
    paddingBottom: 30,
    textAlign: 'center'
  },
  button: {
    marginTop: 15
  },
  logo: {
    maxWidth: 150,
    marginBottom: 8
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

function Login() {
  const [input, setInput] = useState('');
  const userContext = useContext(UserStoreContext);
  const classes = useStyles();

  const handleClick = () => {
    userContext.setValues(input);
    localStorage.setItem('username', input);
  }

  return (
    <Grid 
      container 
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={12}>
        <Paper elevation={3} className={classes.paper}>
          <Grid className={classes.innerContainer}>
            <img src={logo} alt="GitHub Logo" className={classes.logo}/>
            <Typography variant="h5" className={classes.title}>Bem-vindo!</Typography>
          </Grid>
          <TextField 
            variant="outlined"
            label="Usuário do GitHub"
            onChange={event => setInput(event.target.value)}
            fullWidth
          />
          <Button 
            component={Link}
            to="/home"
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleClick}
            fullWidth
          >
            Entrar
          </Button>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Login;