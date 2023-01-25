import React from "react";
import { Navigate, useLocation, useRoutes } from "react-router-dom";
import AuthMainLayout from "../layout/AuthMainLayout";
import MainLayout from "../layout/MainLayout";
import Index from '../App';
import Page404 from "../pages/ErrorPage/page404";
import Login from "../pages/AuthPage/Login";
import Signup from "../pages/AuthPage/Signup";
// pages import for routing like login signup 404 and others 


// Routing function

export default function Router() {
    return useRoutes([
        {
            path: "",
            element: <MainLayout />,
            children: [
                {
                    path: "",
                    element: <Index />,
                },
                // {
                //     path: "category",
                //     element: <Category />,
                // },
            ],
        },

        {
            path: "",
            element: <AuthMainLayout />,
            children: [
                {
                    path: "signup",
                    element: <Signup />,
                },
                {
                    path: "login",
                    element: <Login />,
                },
            ],
        },

        { path: "404", element: <Page404 /> },
        // { path: "500", element: <Page500 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
    ]);
}