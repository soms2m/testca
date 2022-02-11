import React, {useState} from 'react';
import Avatar from './Avatar'
import Login from './Login';
import { createStyles, makeStyles, Theme, fade } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { TextareaAutosize } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux';
import {userLoginPopup} from '../../redux/';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(1)
    },
    title: {
      flexGrow: 1,
      textAlign: "center"
    },
    logo: {
      maxWidth: 40,
      marginRight: '10px'
    }
  })
);

function Header(props) {
  const classes = useStyles();
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const balance = useSelector(state => state.balance);  
  const dispatch = useDispatch();

  let displayLogin = () => {
      if (!isLoggedIn) {
        dispatch(userLoginPopup(true));
      } else {
        dispatch(userLoginPopup(false));
      }
    
  }
  return (
    <>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
          </IconButton>
          <div>Somasundaram</div>
          <Typography variant="h6" className={classes.title}>
            Casino
          </Typography>
            {
                isLoggedIn ? 
                    <>
                    <Avatar/>
                    <div>
                    {'$' + balance}
                    </div>
                    </> : 
                    <Button onClick={displayLogin} color="inherit">Login</Button> 
            }
        </Toolbar>
      </AppBar>
    </div>
    </>
  );
}

export default Header;