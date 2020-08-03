import React, { useContext } from 'react';
import { observer } from 'mobx-react';

import {
  Card as MaterialCard,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
  Typography,
  Avatar,
  Button,
  makeStyles
} from '@material-ui/core';

import { UserStoreContext } from '../../stores/User/UserStore';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  }
}));

function Card() {
  const userContext = useContext(UserStoreContext);
  const { 
    name, avatar_url, bio, repositories, followers, following, url 
  } = userContext;

  const classes = useStyles();

  return (
    <Grid 
      container 
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <MaterialCard className={classes.root}>
        <CardHeader
          avatar={
            <Avatar src={avatar_url}></Avatar>
          } 
          title={name}
          subheader={bio}
        />

        <CardContent>
          <Grid container direction="row" spacing={3}>
            <Grid item direction="column">
              <Typography style={{fontWeight: 'bold'}}>{repositories}</Typography>
              <Typography>Repositórios</Typography>
            </Grid>
            <Grid item direction="column">
              <Typography style={{fontWeight: 'bold'}}>{followers}</Typography>
              <Typography>Seguidores</Typography>
            </Grid>
            <Grid item direction="column">
              <Typography style={{fontWeight: 'bold'}}>{following}</Typography>
              <Typography>Seguindo</Typography>
            </Grid>
          </Grid>
        </CardContent>

        <CardActions>
          <Button size="small" component="a" href={url}>Ver perfil completo</Button>
        </CardActions>
        
      </MaterialCard>
    </Grid>
  );
}

export default observer(Card);