import { Route } from "react-router-dom";

import LandingPage from './Components/pages/landingPage/LandingPage'
import About from "./Components/pages/about/about.jsx";
import Blog from "./Components/pages/blog/Blog.jsx";
import MailServer from "./Components/pages/mailServer/mailServer";
import Forum from "./Components/pages/forum/forum";
import KetchUp from "./Components/pages/ketchUp/ketchUp";
import Event404 from "./Components/pages/event404/event404";
import RSVPapp from "./Components/pages/RSVP/RSVPapp";

const routes = [
   
    {
        path: '/about',
        component: About
    },
    {
        path: '/blog',
        component: Blog
    },
    {
        path: '/forum',
        component: Forum
    },
    {
        path: '/mailserver',
        component: MailServer
    },
    {
        path: '/ketchup',
        component: KetchUp
    },
    {
        path: '/event404',
        component: Event404
    },
    {
        path: '/rsvp',
        component: RSVPapp
    },
    {
        path: '/',
        component: LandingPage
    },
]

export function RoutWithSubRoutes(route) {
    return (
        
            <Route
                path={route.path}
                render={props => (
                    <route.component {...props} routes={route} />
                )}
            />
        
    )
}

export default routes