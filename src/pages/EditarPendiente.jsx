import {
  Form,
  useNavigate,
  useLoaderData,
  redirect,
  useActionData,
} from "react-router-dom";
import { obtenerPendiente, actualizarPendiente } from "../api/pendientes";
import Formulario from "../components/Formulario";
import Error from "../components/Error";

export async function loader({ params }) {
  //params es un parametro que se le asigna por defecto a loader
  const pendiente = await obtenerPendiente(params.pendienteId); //Ponemos clienteId porque es el nombre que le asignamos a esa parte de la url que va a ser dinamica dentro del path en main.jsx
  if (Object.values(pendiente).length == 0) {
    throw new Response("", {
      status: 404,
      statusText: "NO HAY RESULTADOS",
    });
  }

  return pendiente;
}

export async function action({ request, params }) {
  const formData = await request.formData();

  const datos = Object.fromEntries(formData);

  const email = formData.get("email");

  //Validacion
  const errores = [];
  if (Object.values(datos).includes("")) {
    errores.push("Todos los campos son obligatorios");
  } else {
    // eslint-disable-next-line no-control-regex
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])");

    if (!regex.test(email)) {
      errores.push("El email no es valido");
    }
  }

  //Restaurando si hay errores
  if (Object.keys(errores).length) {
    return errores;
  }

  //Actualizar el cliente

  await actualizarPendiente(params.pendienteId, datos); //Se esta agregando un await porque las peticiones que se estan haciendo en el otro archivo son asincronas
  return redirect("/");
}

export default function EditarPendiente() {
  const navigate = useNavigate();
  const pendiente = useLoaderData();
  const errores = useActionData();

  return (
    <div className=" space-y-5">
      <h1 className=" font-black text-4xl text-blue-900">Editar Pendiente</h1>
      <p className=" mt-3">Edita una tarea existente</p>
      <div className="flex justify-end">
        <button
          className=" bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-800 transition-all font-bold"
          onClick={() => navigate("/")}
        >
          Volver
        </button>
      </div>

      <div className=" bg-white rounded md:w-3/4 mx-auto px-5 py-10 shadow-md">
        {errores?.length &&
          errores.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form method="post" noValidate>
          <Formulario pendiente={pendiente} />

          <input
            type="submit"
            className=" mt-5 w-full bg-blue-600 text-white font-bold rounded p-2 hover:bg-blue-800 transition-all cursor-pointer"
            value="Editar Pendiente"
          />
        </Form>
      </div>
    </div>
  );
}
