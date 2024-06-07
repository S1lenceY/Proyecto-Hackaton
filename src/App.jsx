import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoute from "./Auth/PrivateRoute";
import PublicRoute from "./Auth/PublicRoute";
import AuthContextProvider from "./Auth/authContext";
import {
  LOGIN,
  LOGOUT,
  CHAT,
  INICIO,
  MAIN,
  AMIGOS,
  GRUPOS,
  PERFIL,
  RECURSOS,
} from "./Path/Paths";
import Chat from "./Components/Chat";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import ErrorPage from "./Error/ErrorPage";
import Inicio from "./Components/Inicio";
import Amigos from "./Components/Amigos";
import Grupos from "./Components/Grupos";
import Perfil from "./Components/Perfil";
import Recursos from "./Components/Recursos";

const router = createBrowserRouter([
  {
    path: CHAT,
    element: <PrivateRoute />,
    children: [
      {
        path: MAIN,
        element: <Chat />,
        children: [
          {
            path: INICIO,
            element: <Inicio />,
          },
          {
            path: AMIGOS,
            element: <Amigos />,
          },
          {
            path: GRUPOS,
            element: <Grupos />,
          },
          {
            path: PERFIL,
            element: <Perfil />,
          },
          ,
          {
            path: RECURSOS,
            element: <Recursos />,
          },
        ],
      },
      {
        path: LOGOUT,
        element: <Logout />,
      },
    ],
  },
  {
    path: "/",
    element: <PublicRoute />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: LOGIN,
        element: <Login />,
      },
    ],
  },
]);

const App = () => {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
};

export default App;
