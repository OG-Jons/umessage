import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import styled from 'styled-components';

const StyledDrawer = styled(Drawer)`

.MuiDrawer-root.MuiDrawer-modal.sc-bdnxRM.glhhVA.list {
    position: fixed;
    z-index: 300;
    inset: 0px;
}

.MuiDrawer-paper {
    top: 10%;
    width 15%;
    flex: 1 0 auto;
    height: 100%;
    display: flex;
    outline: 0;
    z-index: 1200;
    position: fixed;
    overflow-y: auto;
    background-color: '#F6F6F6';
    border-radius: 15px 15px 15px 15px;
    flex-direction: column;
    -webkit-overflow-scrolling: touch;
    
    
}

.MuiBackdrop-root {
    top: 10%;
    left: 0; 
    right: 0;
    bottom: 0; 
    display: flex;
    z-index: -1;
    position: fixed;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
}
`;
  

export default function Sidebar({sideBar}) {
    
  return (
    <div className="list">
       <StyledDrawer onClose={sideBar} open={sideBar} className="list">
           <div classname="list">
                <h1>Hello world</h1>
           </div>
       </StyledDrawer>
    </div>
  );
}