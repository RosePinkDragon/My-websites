import React from 'react';
import SidebarChat from "./SidebarChat";
import {Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons"

import './Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar/>
                <div className="sidebar__hederRight">
                    
                    <IconButton>
                    <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                    <ChatIcon/>
                    </IconButton>
                    <IconButton>
                    <MoreVertIcon/>
                    </IconButton>

                </div>
            </div>
            
            <div className="sidebar__search">
                <div class="sidebar__searchContainer">

                    <SearchOutlined/> 
                    <input placeholder="Search or Start new chat" type="text"></input>
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                
            </div>
            
        </div>
    );
}

export default Sidebar