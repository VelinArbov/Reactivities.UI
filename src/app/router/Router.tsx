import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import NotFound from "../../features/errors/NotFound";
import ServerError from "../../features/errors/ServerError";
import LoginForm from "../../features/users/LoginForm";
import ProfilePage from "../../features/profiles/ProfilePage";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'activities', element: <ActivityDashboard /> },
            { path: 'activities/:id', element: <ActivityDetails /> },
            { path: 'createactivity', element: <ActivityForm key='create' /> },
            { path: 'edit/:id', element: <ActivityForm key='edit' /> },
            { path: 'profiles/:username', element: <ProfilePage/> },
            { path: 'login', element: <LoginForm/> },
            { path: 'not-found', element: <NotFound /> },
            { path: '/server-error', element: <ServerError/> },
            { path: '*', element: <Navigate replace to='/not-found'/> }
        ]
    }
]

export const router = createBrowserRouter(routes)