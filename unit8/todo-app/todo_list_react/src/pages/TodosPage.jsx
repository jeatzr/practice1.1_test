// src/components/pages/TodosPage.jsx
import { useState } from "react";
import TodoList from "../components/organisms/TodoList";
import AddTodoForm from "../components/molecules/AddTodoForm";
import TodoTemplate from "../components/templates/TodoTemplate";

const initialTodos = [
  { id: 1, text: "Learn JSX", done: true },
  { id: 2, text: "Practice props", done: false },
];

export default function TodosPage() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (id) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const addTodo = (text) => {
    const newTodo = { id: crypto.randomUUID(), text, done: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <main>
      <TodoTemplate
        header={<h1>My tasks</h1>}
        form={<AddTodoForm onAdd={addTodo} />}
      >
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </TodoTemplate>
    </main>
  );
}
