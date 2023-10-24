import { useNavigate, Form, redirect} from "react-router-dom"
import { eliminarPendiente } from "../api/pendientes"


export async function action({params}) {
  await eliminarPendiente(params.pendienteId)
  return redirect('/')
}


const Pendiente = ({pendiente}) => {

  const navigate = useNavigate()
  return (
    <tr>
      <td className="p-5 space-y-2">
        <p className="text-2xl text-gray-600">{pendiente.encargado}</p>
        <p><span className=" font-bold">Area: </span>{pendiente.area}</p>
      </td>
      <td className="p-5">
        <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Email: </span>{pendiente.email}</p>
        <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Telefono: </span>{pendiente.telefono}</p>
      </td>
      <td className="p-5">
        <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Notas: </span>{pendiente.notas}</p>
      </td>
      <td className="p-5 flex justify-end gap-5">
        <button 
        className=" text-blue-600 hover:text-blue-800 transition-all font-bold"
        onClick={() => navigate(`/tareas/${pendiente.id}/editar`)}
        >
          Editar
        </button>
        <Form
          method="POST"
          action={`/tarea/${pendiente.id}/eliminar`}
          onSubmit={(e) => {
            if(!confirm(`Seguro que deseas eliminar la tarea asignada a ${pendiente.nombre}`)) {
              e.preventDefault()
            }
          }}
        >
          <input 
            type="submit" 
            className=" text-red-600 hover:text-red-800 transition-all font-bold"
            value="Eliminar"
            />
        
        </Form>
      </td>
    </tr>
  )
}

export default Pendiente
