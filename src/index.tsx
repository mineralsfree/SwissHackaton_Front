import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {ScanScreen} from "./components/ScanScreen/ScanScreen";
import LoginPage from "./components/Login/Login";
import RegisterPage from "./components/Login/Register";
import {ProtectedLayout} from "./contexts/ProtectedLayout";
import {HomeLayout} from "./contexts/HomeLayout";
import { AuthProvider } from './contexts/AuthContext';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route element={<HomeLayout/>}>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/dashboard" element={<ProtectedLayout/>}>
                <Route path="stats" element={<ScanScreen/>}/>
                <Route path="trash" element={<ScanScreen/>}/>
                <Route path="user" element={<ScanScreen/>}/>
            </Route>
        </Route>
    </>
));
root.render(
    <React.StrictMode>
        {/*<AuthProvider>*/}
            <RouterProvider router={router}/>
        {/*</AuthProvider>*/}
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
