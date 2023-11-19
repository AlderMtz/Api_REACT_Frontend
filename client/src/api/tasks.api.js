import axios from 'axios' /* importamos el modulo "axios" que nos permite comunicarnos con el backend "django run server" */

const taskApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/tasks/api/v1/tasks/', /* definimos a "baseUrl" ya que será la misma direccion que vamos a utilizar en todas las operaciones */
}); 

export const getAllTasks = () => taskApi.get('/'); /* las listas de tareas que se encuentran en la direccion donde corre "django run server" */
 /* ('/') esto solo agrega un "/" a la ruta y no pasa nada  */

export const getTask = (id) => taskApi.get(`/${id}/`) /* creamos una funcion especifica para poder leer una tarea esp. */

export const createTask = (task) => taskApi.post('/', task); /* enviamos la ruta con '/' y un segundo parametro llamado "task" */

export const deleteTask = (id) => taskApi.delete(`/${id}`); /* creamos una nueva funcion y esta eliminara un post */
                 /* concatenamos al endpoint con " `/${id}` " ya que necesitamos especificar que eliminaremos */
export const updateTask = (id, task) => taskApi.put(`/${id}/`, task) /* creamos una funcion para poder actualizar nuestras tareas */
                /* concatenamos con " `/${id}` " y agregamos "task" que es la "data" a actualizar */