import { Outlet, Link, useLocation } from 'react-router-dom'
import ImagenUdc from "../images/udc.png"

const Layout = () => {

  const location = useLocation()
  return (
    <div className=' md: flex md: min-h-screen'>
        <aside className=' md:w-1/4 bg-blue-900 px-5 py-10'>
        <img src={ImagenUdc}/>
        <h3 className=' text-white font-black text-center text-3xl mt-5'>Facultad de Medicina</h3>
          <nav className=' mt-10'>
              <Link 
                className={`${location.pathname === '/' ? ' text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300 hover:transition-all`} 
                to="/">
                  Tareas
              </Link>
              <Link 
                className={`${location.pathname === '/tareas/nuevas' ? ' text-blue-300' : 'text-white'} text-2xl block mt-2 hover:text-blue-300 hover:transition-all`} 
                to="/tareas/nuevas">
                  Nueva Tarea
              </Link>
          </nav>
          
        </aside>

        <main className=' md:w-3/4 p-10 md:h-screen overflow-scroll overflow-x-hidden'>
          <Outlet/> {/* El OUTLET lo pondremos donde queremos que se este inyectando el codigo que va a ser diferente dentro de las demas paginas */}
        </main>
    </div>
  )
}

export default Layout
