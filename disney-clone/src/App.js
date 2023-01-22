import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Root from "./components/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{ path: "/", element: <Login /> }],
  },

  // errorElement: <ErrorPage />,
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
