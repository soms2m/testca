import React, {useEffect, useState, useRef} from 'react';
import '../../style/game.css';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Slide from '@mui/material/Slide';
import { userBalance } from '../../redux';
import { useSelector, useDispatch } from 'react-redux';
import {ButtonGroup} from '../Button-Group';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    title: {
      flexGrow: 1,
      fontSize : 50,
      textAlign: "center"
    }
  })
);


function Game(props) {
    const classes = useStyles(); 
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const myUserBalance = useSelector(state => state.balance);
    const dispatch = useDispatch();
    const allSymbols = ['&#9824;', '&#9827;', '&#9829;', '&#9830;', '&#9824;', '&#9827;', '&#9829;', '&#9830;', '&#9824;', '&#9827;', '&#9829;', '&#9830;'];
    const [symbols, setSymbols] = useState();
    const [slots, setSlots] = useState(0);
    let balance = props.balance;
    const [gameOver, isGameOff] = useState(false);
    const [checked, setChecked] = useState(false);
    const containerRef = useRef(null);
    const handleChange = () => {
        setChecked((prev) => !prev);
    };
    let shuffle = () => {
        let newSymbols = [...allSymbols],
            length = newSymbols.length,
            oldItem,
            i,
            temp,
            result = [],
            counts = {},
            balance = props.balance,
            points = 0,
            cost = 2;

        if (Math.sign(balance) === -1) {
            isGameOff(true);
            return false;
        } 
        if (length !== 0) {
            for (i=0; i<length; i++) {
                oldItem  = newSymbols[i];
                temp = Math.floor(Math.random() * (i ? i + 1 : 1));
                newSymbols[i] = newSymbols[temp];
                newSymbols[temp] = oldItem;
            }
        }
        result = [newSymbols[0], newSymbols[1], newSymbols[2]];
        result.forEach(function(x) {
            counts[x] = (counts[x] || 0) + 1;
        });
        if (Object.values(counts).indexOf(3) !== -1) {
            if (Object.keys(counts).indexOf('&#9824;') !== -1) {
                points = 5;
            } else {
                points = 2;
            }
            setSlots(3);
        } else if (Object.values(counts).indexOf(2) !== -1) {
            points = 0.5;
            setSlots(2);
        } else {
            setSlots(1);
        }
        balance = parseFloat((balance + points - cost).toFixed(2));
        props.setMyBalance(balance);
        dispatch(userBalance(balance));  
        setSymbols(result);
        handleChange();
    }

    let fake = () => {
        setSymbols(['&#9824;','&#9824;','&#9824;']);
        setSlots(0);
    }
     
    let close = () => {
        let result = {},
        existingEntries = localStorage.getItem('casinoUserResult');
        if (existingEntries.length) {
            existingEntries = JSON.parse(existingEntries);
        } else {
            existingEntries = [];
        }
        props.setPopup(false);        
        result['id'] = existingEntries.length + 1;
        result['name'] = isLoggedIn ? JSON.parse(localStorage.getItem('casino'))[0]['name'] : 'Guest';
        result['date'] = new Date();
        result['balance'] = balance;
        result['slots'] = slots;
        existingEntries.push(result);
        localStorage.setItem('casinoUserResult', JSON.stringify(existingEntries));
        setSymbols([]);
        isGameOff(false);
        props.setMyBalance(9.99);
    }
    return (props.trigger) ? (
        <div className="popup" ref={containerRef}>
            <div className="popup-inner">                
            <div className={classes.root}>
                <Box mt={2} pt={3}>
                    <ButtonGroup>
                        <Button onClick={shuffle} variant="contained" color="primary" disabled={gameOver}>
                            Spin
                        </Button>
                        <Button onClick={fake} variant="contained" color="secondary">
                            Fake
                        </Button>
                        <Button onClick={close} variant="contained">
                            Close
                        </Button>
                    </ButtonGroup>
                </Box>
                </div>
                <div className="popup-content" id="content">                    
                    {(symbols && symbols.length) ? symbols.map((symb, index)=>{                                               
                        return <span key={index} dangerouslySetInnerHTML={{ __html: symb }}></span>
                    }) : 
                        <Box mt={2} pt={3}>
                            <Typography variant="h1"  color="primary" className={classes.title}>
                                Start Playing
                            </Typography>
                        </Box>
                    }
                    {gameOver ? 
                    <Typography variant="h1" color="secondary" className={classes.title}>
                        Game Over
                    </Typography> : ''
                    }
                </div> 
            </div>
        </div>
    ) : ""
}

export default Game;
