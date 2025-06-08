import { render, screen, fireEvent } from "@testing-library/react";
import TodoForm from "../TodoForm"; // Asegúrate de que la ruta sea correcta

it("debe manejar correctamente la entrada de texto con espacios al inicio o final", () => {
  const mockAddTodo = jest.fn();

  // Prepare: renderizar el formulario con un mock de la función onAddTodo
  render(<TodoForm onAddTodo={mockAddTodo} />);

  const input = screen.getByPlaceholderText("Añadir nueva tarea..."); // Cambié aquí
  fireEvent.change(input, { target: { value: "  tarea con espacios  " } });

  const form = screen.getByTestId("todo-form");
  fireEvent.submit(form);

  // Validate: verificar que el texto no tiene espacios
  expect(mockAddTodo).toHaveBeenCalledWith("tarea con espacios");
});
