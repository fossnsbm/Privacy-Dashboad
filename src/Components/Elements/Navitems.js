import React from 'react';
import SpeedOutlinedIcon from '@material-ui/icons/SpeedOutlined';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import ExtensionOutlinedIcon from '@material-ui/icons/ExtensionOutlined';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';

export const Navitems = [

    {
        title: "Dashboard",
        icon: <SpeedOutlinedIcon/>,
        link: '/'
    },
    {
        title: "FOSS Blog",
        icon: <BookOutlinedIcon/>,
        link: '/blog'
    },
    {
        title: "Mail Server",
        icon: <MailOutlinedIcon/>,
        link: '/mail'
    },
    {
        title: "FOSS Forum",
        icon: <ForumOutlinedIcon/>,
        link: '/forum'
    },
    {
        title: "Ketchup",
        icon: <ExtensionOutlinedIcon/>,
        link: '/ketchup'
    },
    {
        title: "Event 404",
        icon: <EventNoteOutlinedIcon/>,
        link: '/event'
    },
    {
        title: "RSVP App",
        icon: <EventAvailableOutlinedIcon/>,
        link: '/rsvp'
    },

];