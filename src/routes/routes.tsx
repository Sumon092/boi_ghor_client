import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

const routes=createBrowserRouter([
{
    path:'/',
    element:<App/>,
    children:[
        {
            index:true,
            element:<Home/>
        }
    ]
},
{
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
export default routes;