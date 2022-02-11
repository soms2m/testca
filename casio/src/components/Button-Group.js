import {
    makeStyles,
    ButtonGroup as MaterialButtonGroup
  } from "@material-ui/core";
  
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *:not(:last-child)": {
        marginRight: theme.spacing(3)
      }
    }
  }));
  
  export const ButtonGroup = ({ children }) => {
    const classes = useStyles();
    return <div className={classes.root}>{children}</div>;
  };
  