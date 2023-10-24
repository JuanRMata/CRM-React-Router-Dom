import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import NuevoPendiente,{ action as nuevoPendienteAction} from "./pages/NuevoPendiente";
import Index, { loader as PendientesLoader } from "./pages/Index";
import ErrorPage from "./components/ErrorPage";
import EditarPendiente, { loader as EditarPendienteLoader, action as EditarPendienteAction } from "./pages/EditarPendiente";
import { action as EliminarPendienteAction} from "./components/Pendiente"

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: PendientesLoader,
        errorElement: <ErrorPage/>
      },
      {
        path: "/tareas/nuevas",
        element: <NuevoPendiente />,
        action: nuevoPendienteAction,
        errorElement: <ErrorPage/>
      },
      {
        path: '/tareas/:pendienteId/editar', //Con los : permite que las url sean dinamicas
        element: <EditarPendiente />,
        loader: EditarPendienteLoader,
        action: EditarPendienteAction,
        errorElement: <ErrorPage/>
      },
      {
        path: '/tarea/:pendienteId/eliminar',
        action: EliminarPendienteAction
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
