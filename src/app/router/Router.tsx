import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import NotFound from "../../features/errors/NotFound";
import ServerError from "../../features/errors/ServerError";
import ProfilePage from "../../features/profiles/ProfilePage";
import RequireAuth from "./RequireAuth";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {element: <RequireAuth/>, children :[
                { path: 'activities', element: <ActivityDashboard /> },
                { path: 'activities/:id', element: <ActivityDetails /> },
                { path: 'createactivity', element: <ActivityForm key='create' /> },
                { path: 'edit/:id', element: <ActivityForm key='edit' /> },
                { path: 'profiles/:username', element: <ProfilePage/> }
            ]},
            { path: '', element: <HomePage /> },
            { path: 'not-found', element: <NotFound /> },
            { path: '/server-error', element: <ServerError/> },
            { path: '*', element: <Navigate replace to='/not-found'/> }
        ]
    }
]

export const router = createBrowserRouter(routes)