import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import AppForRouter from './AppForRouter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // Step:1
    // Wrap the App component with BrowserRouter
    <BrowserRouter>
    <AppForRouter />
    </BrowserRouter>
);

