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
  }
}));

function Login() {
  const [input, setInput] = useState('');
  const userContext = useContext(UserStoreContext);
  const classes = useStyles();

  const handleClick = () => {
    userContext.setValues(input);
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
          <Typography variant="h5" className={classes.title}>Bem-vindo!</Typography>
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