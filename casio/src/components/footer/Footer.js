import React from 'react'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    }
  })
);

function Footer() {    
  const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography align="right">Copyright © 2022 Somasundaram</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Footer;
