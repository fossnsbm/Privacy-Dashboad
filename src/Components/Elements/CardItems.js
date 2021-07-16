import React from 'react';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import ExtensionOutlinedIcon from '@material-ui/icons/ExtensionOutlined';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';
import EventNoteOutlinedIcon from '@material-ui/icons/EventNoteOutlined';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';

export const CardItems = [

    {
        title: "FOSS Blog",
        icon: <BookOutlinedIcon/>,
        link: '/blog',
        status: ''
    },
    {
        title: "Mail Server",
        icon: <MailOutlinedIcon/>,
        link: '/mail',
        status: ''
    },
    {
        title: "FOSS Forum",
        icon: <ForumOutlinedIcon/>,
        link: '/forum',
        status: ''
    },
    {
        title: "Ketchup",
        icon: <ExtensionOutlinedIcon/>,
        link: '/ketchup',
        status: ''
    },
    {
        title: "Event 404",
        icon: <EventNoteOutlinedIcon/>,
        link: '/event',
        status: ''
    },
    {
        title: "RSVP App",
        icon: <EventAvailableOutlinedIcon/>,
        link: '/rsvp',
        status: ''
    },

];