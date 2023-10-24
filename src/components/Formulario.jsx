const Formulario = ({pendiente}) => {
    return (
        <>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="encargado"
                >Encargado:</label>
                <input 
                    id="encargado"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Nombre del Encargado"
                    name="encargado"
                    defaultValue={pendiente?.encargado}
                />
            </div>
            <div className="mb-4"> 
                <label
                    className="text-gray-800"
                    htmlFor="area"
                >Area:</label>
                <input 
                    id="area"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Nombre del Area"
                    name="area"
                    defaultValue={pendiente?.area}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="email"
                >E-mail:</label>
                <input 
                    id="email"
                    type="email"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Email del encargado"
                    name="email"
                    defaultValue={pendiente?.email}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="telefono"
                >Teléfono:</label>
                <input 
                    id="telefono"
                    type="tel"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Teléfono del Encargado"
                    name="telefono"
                    defaultValue={pendiente?.telefono}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="notas"
                >Notas:</label>
                <textarea
                    as="textarea"
                    id="notas"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
                    placeholder="Notas sobre la tarea"
                    name="notas"
                    defaultValue={pendiente?.notas}
                />
            </div>
        </>
    )
}

export default Formulario