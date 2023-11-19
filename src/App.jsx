import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; 
import { TasksPage } from "./pages/TasksPage";
import { TaskFormPage } from "./pages/TaskFormPage";
import { Navigation } from "./components/Navigation";
import { Toaster } from "react-hot-toast"  /* esta libreria nos sirve para lanzar notificaciones */

function App() {
  return (
    <BrowserRouter>  {/* engloba todas las rutas que vamos a utilizar */}
    
      <div className="container mx-auto"> {/* centra y abarca todo el pespacio posible  */}
        <Navigation ></Navigation> {/* importamos la funcion "Navigation" */}

        <Routes>       {/* actua como una unorder list */}
        <Route path="/" element= {<Navigate to={ "/tasks"} />} ></Route> {/* Navigate nos sirve para redireccionar a una pagina */}
        <Route path="/tasks" element={<TasksPage/>}/>  {/* y route actua como item en donde colocamos la direccion */}
        <Route path="/tasks-create" element={<TaskFormPage/>}></Route> {/* y route actua como item en donde colocamos la direccion */}
        <Route path="/tasks/:id" element={<TaskFormPage/>}></Route> {/* reutilizaremos a "TaskFormPage" para crear la opcion de "EDITAR" */}
        {/* /:id es un elemento dinámico en donde irá la id de la tarea a editar */}
        </Routes>

        <Toaster/> {/* mandamos a llamar a la funcion Toaster */}
      </div>
      

    </BrowserRouter>  
  );
}
export default App