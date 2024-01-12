import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './features/store';



const Signup = lazy(() => import("./components/Signup"));
const Login = lazy(() => import("./components/Login"))
const Dashboard = lazy(() => import("./components/Dashboard"))



const appRouter = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Signup/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Suspense fallback="Loading...">
      <RouterProvider router={appRouter}/>
    </Suspense>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
