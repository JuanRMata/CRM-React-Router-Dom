import { useLoaderData } from "react-router-dom"
import Pendiente from "../components/Pendiente";
import { obtenerPendientes } from "../api/pendientes";

export function loader() {
  const pendientes = obtenerPendientes()
  return pendientes
}

const Index = () => {
  
  const pendientes = useLoaderData()

  return (
    <>
      <h1 className=" font-black text-4xl text-blue-900">Tareas</h1>
      <p className=" mt-3">Administra los Pendientes</p>
      {pendientes.length ? 
        <table className="w-full bg-white shadow-lg mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2 border">Encargado/Area</th>
              <th className="p-2 border">Contacto</th>
              <th className="p-2 border">Descripcion</th>
              <th className="p-2 border">Acciones</th>
            </tr>
          </thead>

            <tbody>

              {pendientes.map(pendiente => (
                <Pendiente 
                  pendiente={pendiente}
                  key={pendiente.id}
                />
              ))}

            </tbody>

        </table>

       : 

        <p className='text-center mt-10'>No hay pendientes aun</p>
      }
    </>
  )
}

export default Index
