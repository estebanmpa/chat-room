import React from 'react';
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import * as Pages from '../pages';


const pages = [
    {
        path: '/chat-room',
        exact: true,
        component: <Pages.ChatRoomApp />
    },
    {
        path: '/',
        exact: true,
        component: <Pages.HomeApp />
    },
    {
        path: '*',
        exact: true,
        component: <Pages.NotFoundApp />
    },
]


const AppRoutes = ({ history }) => {
    return (
        <Router history={history}>
            <Routes>
                {pages.map((page, i) => {
                    return <Route key={`${page.path}${i}`}
                        path={page.path}
                        element={page.component}
                    />
                })}
            </Routes>
        </Router>
    )
}

export default AppRoutes;