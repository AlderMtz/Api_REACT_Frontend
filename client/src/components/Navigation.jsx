import { Link } from 'react-router-dom'

export function Navigation() { /* creamos una funcion que la hara de NAV */
    return (
        <div class="nav" /* className='flex justify-between py-10 px-10' */>
            <Link to="/tasks"> {/* agregamos un "h1" dentro de "Link" para redireccionar */}
                <h1 class= "taskapp" /* className='font-bold text-4xl mb-4' */>Task App</h1>
            </Link>  {/* Link es una funcion de REACT que reemplaza a "link" */}
            <Link to="/tasks-create">
                <h1 class= "taskapp">Create Task</h1>
            </Link>  {/* Link es una funcion de REACT que reemplaza a "link" */}  
        </div>
    )
}