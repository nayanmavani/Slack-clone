import React, { useState, useEffect } from 'react'
import "./Sidebar.css"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import SidebarOption from "./SidebarOption";
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from './firebase';
import { useStateValue } from "./StateProvider";


function Sidebar() {
    const [{ user }] = useStateValue();
    const [Channels, setChannels] = useState([]);

    useEffect(() => {
        db.collection('rooms').onSnapshot((onSnapshot) => {
            setChannels(
                onSnapshot.docs.map((doc) => ({
                    id:doc.id,
                    name:doc.data().name,
                }))
            )
        })
    }, []);
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_info">
                    <h2>Clever Programmer</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                    </h3>
                </div>
                <CreateIcon />
            </div>
                <SidebarOption Icon={InsertCommentIcon} title="Threads" />
                <SidebarOption Icon={InboxIcon} title="Mention & reactions" />
                <SidebarOption Icon={DraftsIcon} title="Saved items" />
                <SidebarOption Icon={BookmarkBorderIcon} title="Channel Browser" />
                <SidebarOption Icon={PeopleAltIcon} title="People & user group" />
                <SidebarOption Icon={AppsIcon} title="Apps" />
                <SidebarOption Icon={ExpandLessIcon} title="Show less" />
                <SidebarOption Icon={FileCopyIcon} title="File browser" />
                <hr />
                <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
                <hr/>
                <SidebarOption Icon={AddIcon} addChannelOption={true} title="Add channel" />
                {Channels.map(Channel => (
                    <SidebarOption key={Channel.id} addChannelOption={false} title={Channel.name} id={Channel.id} />
                ))}

        </div>
    );
}

export default Sidebar;