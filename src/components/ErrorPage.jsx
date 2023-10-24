import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError()
    return (
        <div className=" space-y-5">
            <h1 className=" text-center text-6xl font-extrabold mt-15 text-blue-900
            "> Facultad de Medicina</h1>
            <p className=" text-center uppercase font-bold">Hubo un error</p>
            <p className=" text-center">{error.statusText || error.message}</p>
        </div>
    )
}