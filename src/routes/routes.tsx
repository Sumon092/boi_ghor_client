import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import AddBook from "../pages/AddBook";
import BookDetails from "../pages/BookDetail";

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
    path: '/add-book',
    element: <AddBook />,
  },
  {
    path: '/book-detail/:id',
    element: <BookDetails />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
export default routes;