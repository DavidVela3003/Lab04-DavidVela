// TodoList.tsx
import React from "react";
import TodoItem from "./TodoItem";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
  return (
    <div data-testid="todo-list">
      {todos.map(todo => (
        <div key={todo.id} className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
              className="w-4 h-4 mr-2 cursor-pointer"
              data-testid={`todo-checkbox-${todo.id}`}  // Asignar data-testid dinámico
            />
            <span
              className={todo.completed ? "line-through text-gray-400" : ""}
              data-testid={`todo-item-${todo.id}`} // Asignar data-testid dinámico
            >
              {todo.text}
            </span>
          </div>
          <button
            onClick={() => onDelete(todo.id)}
            className="px-2 py-1 text-sm text-red-500 hover:text-red-700"
            data-testid={`todo-delete-button-${todo.id}`}  // Asignar data-testid dinámico
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
