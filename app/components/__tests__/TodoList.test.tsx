import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList"; // Asegúrate de que la ruta sea correcta

it("debe pasar las funciones onToggle y onDelete a cada TodoItem", () => {
  const mockToggle = jest.fn();
  const mockDelete = jest.fn();

  const todos = [
    { id: 1, text: "Tarea 1", completed: false },
    { id: 2, text: "Tarea 2", completed: true },
  ];

  render(
    <TodoList todos={todos} onToggle={mockToggle} onDelete={mockDelete} />
  );

  // Ejecutar: Simular clic en el checkbox y en el botón de eliminar
  fireEvent.click(screen.getByTestId("todo-checkbox-1")); // Ahora funciona porque el ID es dinámico
  fireEvent.click(screen.getByTestId("todo-delete-button-1")); // Ahora funciona porque el ID es dinámico

  // Validar: Verificar que las funciones se han llamado correctamente
  expect(mockToggle).toHaveBeenCalledWith(1);
  expect(mockDelete).toHaveBeenCalledWith(1);
});
