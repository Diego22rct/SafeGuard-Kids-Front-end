import { useState, useEffect } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState("");

  const [dueDate, setDueDate] = useState(null);


  // Función para manejar el cambio de entrada
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      text: input,
      completed: false,
      dueDate: dueDate,
    };
    setTodos([...todos, newTodo]);
    setInput("");
    setDueDate(null);
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
    e.target.reset();
  };
    // Función para cargar las tareas del almacenamiento local
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // Función para mostrar los recordatorios
  const showReminders = () => {
    const now = new Date();
    const reminders = todos.filter((todo) => {
      const dueDate = new Date(todo.dueDate);
      return now >= dueDate;
    });
    if (reminders.length > 0) {
      reminders.forEach((reminder) => {
        alert(reminder.text);
      });
    }
  };

  // Programar la función showReminders para que se ejecute cada minuto
  useEffect(() => {
    const interval = setInterval(() => {
      showReminders();
    }, 60000);
    return () => clearInterval(interval);
  }, [todos]);  

  // Función para marcar una tarea como completada
  const toggleCompleted = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  // Función para eliminar una tarea
  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-app p-4 bg-blue-100">
      <h1 className="text-2xl font-bold mb-4">Recordatorios</h1>

      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Escribe una tarea"
          className="p-2 border border-gray-300 mr-2 rounded"
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
        >
          Agregar
        </button>
      </form>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className={`mb-2 p-2 rounded ${todo.completed ? "bg-green-200" : "bg-white"} flex justify-between items-center`}>
            <span onClick={() => toggleCompleted(index)} className="cursor-pointer">{todo.text}</span>
            <button onClick={() => deleteTodo(index)} className="bg-red-500 text-white p-1 rounded">Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
