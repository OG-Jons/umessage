import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import './Sidebar.style.css'
  
export default function Sidebar({sideBar}) {
    
  return (
    <div className="list">
       <Drawer onClose={sideBar} open={sideBar} className="list">
           <div classname="list">
                <h1>Hello world</h1>
           </div>
       </Drawer>
    </div>
  );
}