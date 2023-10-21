

const Cliente = ({cliente}) => {
  return (
    <tr>
      <td className="p-5 space-y-2">
        <p className="text-2xl text-gray-600">{cliente.nombre}</p>
        <p>{cliente.empresa}</p>
      </td>
      <td className="p-5">
        <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Email: </span>{cliente.email}</p>
        <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Telefono: </span>{cliente.telefono}</p>
      </td>
      <td className="p-5 flex justify-end gap-5">
        <button className=" text-blue-600 hover:text-blue-800 transition-all font-bold">Editar</button>
        <button className=" text-red-600 hover:text-red-800 transition-all font-bold">Eliminar</button>

      </td>
    </tr>
  )
}

export default Cliente
