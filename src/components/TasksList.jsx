import { useEffect, useState } from "react" /* oimportamos a la funcion "useEffect" que nos ayudará a visualizar una peticion al backend */
import { getAllTasks } from "../api/tasks.api";
import { TaskCard } from "./TaskCard"; /*  */


export function TasksList() {

    const [tasks, setTasks] = useState([])  /* declaramos un arreglo en donde "setTasks" almacenará los datos pero al iniciar estará vacia*/

    useEffect(() => {  /* esta funcion se ejecuta una vez se carga la página */
        async function loadTasks() {  /* creamos una funcion para obtener los datos del backend */
            const res = await getAllTasks(); /* guardamos lo que nos de devuelve la funcion getAllTasks */
            setTasks(res.data);  /* guardaremos los datos en el arreglo "setTasks" */
        }
        loadTasks(); /* ejecutamos la funcion creada anteriormente */
    }, []);

    return (
            <div class="contenedor_grid">
                <div class="grid" /* className="grid grid-cols-3 gap-4 p-6" */> {/* colocamos en columnas de 3 */}
                {tasks.map(task => ( /* tasks.map() lo que hara es recorrer cada una de las tareas */
                    <TaskCard key={task.id} task={task} /> /* aqui llamamos a la funcion importafa y pasamos el "id" y la cadena llamada "tasks" */
                ))}
            </div>
            </div>
            )
    
}
