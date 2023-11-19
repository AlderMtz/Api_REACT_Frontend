import { useEffect } from 'react' /* modulo que nos ayuda a desplegar infromacion previamente guardada */
import { useForm } from 'react-hook-form' /* importamos modulo para utilizar formularios en REACT */
import { createTask, deleteTask, updateTask, getTask } from '../api/tasks.api' /* importamos la funcion para ejecutar un "POST" */
import { useNavigate, useParams } from 'react-router-dom'
/* useParams nos permite usar los parametros del "endpoint" */
import { toast } from 'react-hot-toast' /* importamos libreria para usar el efecto de notificacion */


export function TaskFormPage() {


    const { register, handleSubmit, formState: { errors }, setValue } = useForm() /* aqui importamos una funcion nativa llamada "register(para importar imputs)" del modulo useForm */
    /* handleSubmit es una funcion que maneja el envio del formulario */
    /* formState:{errors} es un objeto que se estará llenando condatos si es que hay errores  */
    /* setValue nos permite asignar valores a variables como "title" y "description" */

    const navigate = useNavigate(); /* creamos una variable que utilice el modulo "useNavihgate" */

    const params = useParams(); /* creamos una variable para guardar los parametros del "endpoint" */
    /* console.log(params)  */ /* imprimimos enconsola lo que obtenemos en params */

    const onSubmit = handleSubmit(async (data) => { /* la lectura de datos sera "asincrona" */
        if (params.id) { /* si params.id existe entonces */
            /* console.log("Actualizando") */  /* estaremos actualizando */
            await updateTask(params.id, data) /* invocamos a la funcion para actualizar datos y enviamos "id" y "data" */
            toast.success('Successfully updated task', { /* una vez se actualice una tarea invocamos la animacion "toast" */
                position: "bottom-right",
                style: {
                    background: '#333',
                    color: '#fff',
                }
            })
        }
        else { /* si no entonces estaremos creando y se procede normalmente */
            await createTask(data); /* modificamos un poco el codigo y solo necesitamos esperar a que el "POST" se haya ejecutado correctamente */
            toast.success('Successfully created task', { /* una vez se cree una tarea invocamos la animacion "toast" */
                position: "bottom-right",
                style: {
                    background: '#333',
                    color: '#fff',
                }
            })
        }
        navigate("/tasks"); /* y redireccionamos con navigate a "/tasks" definido en Navigation.jsx */

    })

    useEffect(() => {  /* utilizamos useEffect para mostra contenido previamente ingresado */
        async function loadTask() { /* creamos una funcion asincrona para solicitar un "GET" */
            if (params.id) {
                const res = await getTask(params.id) /* Y lo obrtenido se guarda en "res" */
                console.log(res) /* al final lo imprimimos en consola */
                setValue('title', res.data.title) /* aqui le asignamos un valor a la variable "title" */
                setValue('description', res.data.description) /* aqio le asignamos un valor a la varible "descirption" */
            }
        }
        loadTask();

    }, []);

    /*  aqui se retorna lo que podemos visualizar en pantalla */
    return (
        <div class="formularioarea"/* className=' w-[60vw] h-[50vh] mx-auto' */>
            <form onSubmit={onSubmit}> {/* aqui le pasamos a la "variable" onSubmit la "funcion" onSubmit que se ejecutará con el "boton"*/}

                <div class="contenedor_titulo">
                    <input
                        class="formulariotitulo"
                        type="text"
                        placeholder="Title"
                        {...register("title", { required: true })} /* la funcion ...register guardara lo que reciba en un apartado llamado "title"  */
                    /* className='shadow-[0px_0px_25px_blue]  bg-zinc-700 p-3 rounded-lg block w-full h-[10vh] mb-3' */
                    />
                    {errors.title && <span class="spantext1">Title is required</span>} {/* si ocurrio un error en el titulo nos mostrara un "span"*/}

                </div>

                <div class="contenedor_texto">
                    <textarea
                        class="formulariotexto"
                        rows="3"
                        placeholder="Description"
                        {...register("description", { required: true })} /* agregamos ...register ahora para el "textarea" */
                    /* className='shadow-cyan-400 shadow-inner bg-zinc-700 p-3 rounded-lg block w-full h-[30vh] mb-3' */
                    ></textarea> {/* un apartado para el area de texto */}
                    {errors.description && <span class="spantext2">Description is required</span>} {/* si ocurrio un error en el titulo nos mostrara un "span"*/}

                </div>

                <div class='botones'>
                    <div class='boton_save'>
                        <button
                            /* className=' p-3 rounded-lg w-[15vw] h-[8vh] mx-auto mt-3' */
                        >Save</button> {/* y un boton que ejecutara la accion de guardar */}
                    </div>

                    {/* si params.id contiene algo entonces muestra el boton */}

                    {params.id &&
                        <div class='boton_delete'>
                            <button className=' rounded-lg w-[15vw] h-[8vh] mt-3' onClick={async () => {
                                const acepted = window.confirm('are you shure?') /* definimos una varibale que guardara la confirmacion emergente */
                                if (acepted) {  /* si "acepted" es true continua */
                                    await deleteTask(params.id) /* esperamos la respuesta de que se realizó corerectamente */
                                    toast.success('Successfully deleted task', { /* una vez se cree una tarea invocamos la animacion "toast" */
                                        position: "bottom-right",
                                        style: {
                                            background: '#333',
                                            color: '#fff',
                                        }
                                    })
                                    navigate("/tasks"); /* despues nos dirigimos a la ruta de listas */

                                }
                            }}>Delete</button>
                        </div>
                    }
                </div>



            </form>


        </div>
    )
}