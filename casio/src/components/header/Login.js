import React, {useState, useContext} from 'react';
import '../../style/game.css';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import LoginContext from './LoginContext';
import { useSelector, useDispatch } from 'react-redux';
import {userLogin, userLoginPopup} from '../../redux/';
import {ButtonGroup} from '../Button-Group';

const useStyles = makeStyles((theme) =>({
root: {
    "& > *:not(:last-child)": {
      marginRight: theme.spacing(2)
    },
  }
}));

function Login(props) {
    const classes = useStyles();    
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const dispatch = useDispatch();
    let login = () => {
        if (document.getElementById('email').value === JSON.parse(localStorage.getItem('casino'))[1]['email']){
            dispatch(userLogin(true));            
            dispatch(userLoginPopup(false));
        }        
    }
    let close = () => {
        dispatch(userLoginPopup(false));
    }
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };    
    return (!props.isLoggedIn) ? (
        <div className="popup">
            <div className="login-popup-inner">
                <Typography variant="h3" className={classes.title}>
                    Login
                </Typography>
                <Input id="email" placeholder="Email" inputProps={{ 'aria-label': 'Email' }} /><br/><br/>
                <Input className="password"
                    id="standard-adornment-password"
                    placeholder="Password" 
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                    }
                />
                <Box mt={2} pt={3}>
                    <ButtonGroup>
                        <Button mt={2} pt={3} onClick={login} color="primary"  variant="contained">Login</Button>   
                        <Button mt={2} pt={3} onClick={close}  variant="contained">Close</Button>
                    </ButtonGroup>
                </Box>
            </div>
        </div>
    ) : ""
}

export default Login;
