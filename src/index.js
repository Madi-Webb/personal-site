import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './components/gen/App';
import Error from './components/gen/Error';
import Home from './components/gen/Home';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import About from './components/about/About';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'projects',
                element: <Projects />
            },
            {
                path: 'resume',
                element: <Resume />
            },
            {
                path: 'about',
                element: <About />
            }
        ]
    }
]);

const root = createRoot( document.getElementById('app') );
root.render( <RouterProvider router={router} /> );
