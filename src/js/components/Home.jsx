import React from "react";

//create your first component
const Home = () => {
    const [taskList, setTaskList] = React.useState(['Hacer el súper', 'Limpiar la casa', 'Hacer la comida']); //Inicializa el array taskList con tareas típicas

    const handleDeleteTask = (index) => { //Función borrar tarea manualmente
        const newTaskList = taskList.filter((_,i) => i !== index); // .filter recorre taskList y devuelve un array que incluye los elementos cuyo index no es igual a (index)
        // '_' se usa en lugar de 'task'. '_' evita que el editor lo marque como una variable definida que no se usa.  
        setTaskList(newTaskList); // Es necesario usar la función setTaskList para asignar el nuevo array a taskList
    }
	
    return (
    <div className="container">
        <input id='taskInput' className='input' type="text" onKeyDown={(e) => { // onKeyDown escucha cuando se presiona una tecla
            if (e.key === 'Enter' && e.target.value.trim() !== ''){ // valida si la tecla presionada es Enter y si no son espacios en blanco (trim()) o nada
                setTaskList([...taskList, e.target.value]); // agrega el valor que se ingreso en input  
                e.target.value = '' //Limpia el valor de input después de que se 'carga la tarea' 
            }
        }}
        placeholder="¿Qué vas a hacer hoy?"
        />
		<ul className="list">
            {taskList.map((item, index) => // recorre task list y devuelve el HTML. Asigna el index a key y el elemento al item <li>
            <li className="item" key={index}>{item}
            <button className="button" onClick={()=> handleDeleteTask(index)}>x</button>
            </li> // .button oculta el botón, mientras '.item:hover + .button' muestran el botón cuando el mouse pasa sobre la tarea
            // clic en el botón llama la función handleDeleteTask con el parámetro index
            )}
		</ul>
    </div> 
    );
}

export default Home;