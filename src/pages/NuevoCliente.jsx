import { useNavigate,Form } from "react-router-dom";
import Formulario from "../components/Formulario";

export async function action({request}) {
  const formData = await request.formData()

  const datos = Object.fromEntries(formData)
  console.log(datos)

  return null

}

const NuevoCliente = () => {
  const navigate = useNavigate();
  return (
    <div className=" space-y-5">
      <h1 className=" font-black text-4xl text-blue-900">Nuevo Cliente</h1>
      <p className=" mt-3">Registra un nuevo cliente</p>
      <div className="flex justify-end">
        <button
          className=" bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-800 transition-all font-bold"
          onClick={() => navigate("/")}
        >
          Volver
        </button>
      </div>

      <div className=" bg-white rounded md:w-3/4 mx-auto px-5 py-10 shadow-md">
        <Form 
          method="post"
        >
          <Formulario />

          <input
            type="submit"
            className=" mt-5 w-full bg-blue-600 text-white font-bold rounded p-2 hover:bg-blue-800 transition-all cursor-pointer"
            value="Registrar Cliente"
          />
        </Form>
      </div>
    </div>
  );
};

export default NuevoCliente;
