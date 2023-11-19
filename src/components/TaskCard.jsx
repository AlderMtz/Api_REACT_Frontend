import { useNavigate } from "react-router-dom"  /* IMPORTAMOS PARA PODER USAR "navigate" */

export function TaskCard({ task }) { /* creamos una funcion que la hara de NAV */

    const navigate = useNavigate(); /* DECLARAMOS A "navigate" PARA MOVERNOS A OTRA RRUTA */


    return (

        <div class="box1"
            /* personalizamos los hover */

            onClick={() => {   /* funcion que reacciona a hacer clic sobre el area de "div" */
                /* navigate('/tasks/' + task.id)  tambien esto est valido*/
                navigate(`/tasks/${task.id}`)  /* REDIRECCIONAMOS CON "navigate", concatenamos con "${task.id}" mas comillas invertidas */
                /* se utilizan comillas simples para concatenar */
            }}>
                 <div class="contenido">
                    <h1 class="tamaño_titulo" /* className="font-bold uppercase text-2.5xl" */>{task.title}</h1>       {/* y por cada tarea va a colocar un titulo y parrafo correspondiente */}
                    <p class="tamaño_parrafo" /* className="text-slate-400 " */>{task.description}</p>
                </div>   
               

            <hr />  {/* colocamos una linea para diferenciar los bloques */}
        </div>


    )
}





