import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import UnregViewMore from './Components/Unregistered User View more Page/UnregViewMore.jsx';
import RegViewMore from './Components/Registered User View More Page/RegViewMore.jsx';
import FullViewMore from './Components/FullRecipeViewMore/FullRecipeViewMore.jsx';
// import AddReview from './Components/AddReview/AddReview.jsx';
// import Login from './Components/Login/Login.jsx'; // Add this after complete Login part (put the correct path)
// import AddReview from './Components/AddReview/AddReview.jsx'; // Add this after complete Add recipe part (put the correct path)

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
          {
            path: '',
            element: <Home />,
          },
          {
            path: 'unreg-view-more',
            element: <UnregViewMore />,
          },
          {
            path: 'reg-view-more',
            element: <RegViewMore />,
          },
          {
            path: 'full-recipe-view-more',
            element: <FullViewMore />,
          },
          // {
          //   path: 'add-review',
          //   element: <AddReview />,
          // },
        //   {
        //     path: 'login',
        //     element: <Login />,
        //   },
        //   {
        //     path: 'add-recipe',
        //     element: <AddRecipe />,
        //   },
        ],
      },

]);



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
