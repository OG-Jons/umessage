import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import './TextfieldChatbox.style.css';
import SendIcon from '@material-ui/icons/Send';

export default function TextFieldChatbox() {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(input.trim() === '') return;
    console.log(input);
    setInput('');
  };
  return (
    <div className="text-field">
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div className="container">
          <TextField className="input" label="Message:" value={input} onChange={(e) => setInput(e.target.value)} />
          <SendIcon onClick={handleSubmit} type="submit" className="icon-send" />
        </div>
      </form>
    </div>
  );
}
