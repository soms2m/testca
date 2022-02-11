import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Game from './Game';
import { DataGrid } from '@mui/x-data-grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));

const NestedGrid = () => {
  const classes = useStyles();
  const [trigger, setPopupState] = useState(false);
  const [balance, setBalace] = useState(9.99);
  const columns = [
    { 
      field: 'id', 
      headerName: 'ID', 
      width: 90 
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 150
    },
    {
      field: 'date',
      headerName: 'Date',
      width: 150
    },
    {
      field: 'slots',
      headerName: 'Slots',
      width: 150
    },
    {
      field: 'balance',
      headerName: 'Balance',
      width: 150
    }
  ]
  const rows = localStorage.getItem('casinoUserResult').length ? JSON.parse(localStorage.getItem('casinoUserResult')) : [];

  return (
    <div className={classes.root}>
      <Box m={2} pt={3}>
       <Button onClick={()=>{setPopupState(true)}} style={{
                backgroundColor: "green",
                color: "white"
              }} variant="contained" color="secondary">
          Play
        </Button>
      </Box>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          disableSelectionOnClick
        />
      </div>
      <Game trigger={trigger} setPopup={setPopupState} balance={balance} setMyBalance={setBalace}/>
    </div>
  );
}

export default NestedGrid;