import { makeStyles, TextField, Box, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      width: 'calc(100% - 290px)',
      marginLeft: 270
    },
    position: 'absolute',
    bottom: 0,
    left: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: 'rgb(177, 173, 173)',
    paddingTop: 10,
    paddingBottom: 10,
    width: '100%'
  },
  input: {
    width: '90%',
    marginLeft: 10
  },
  container: {
    display: 'flex',
    alignItems: 'center'
  }
}));

export default function TextFieldChatbox() {
  const classes = useStyles();
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    console.log(input);
    setInput('');
  };
  return (
    <Box className={classes.root}>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Box className={classes.container}>
          <TextField className={classes.input} label="Message:" value={input} onChange={(e) => setInput(e.target.value)} />
          <IconButton onClick={handleSubmit}>
            <SendIcon />
          </IconButton>
        </Box>
      </form>
    </Box>
  );
}
