import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  darkButton: {
    backgroundColor: '#000',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#333',
    },
   // fontFamily: 'Arial, sans-serif', // Set the desired font family
   border: '1px solid rgba(255, 255, 255, 0.2)'
  },
  buttonText: {
    fontFamily: 'Open Sans, sans-serif', // Set the desired font family
    fontSize: '0.5rem', // Set the desired font size
    textTransform: 'none', 
    
  },
}));

const BlackButton = ({text,onClick}) => {
  const classes = useStyles();

  return (
    <Button className={classes.darkButton} variant="contained" onClick={onClick}>
       <span className={classes.buttonText}>{text}</span>
    </Button>
  );
};

export default BlackButton;
