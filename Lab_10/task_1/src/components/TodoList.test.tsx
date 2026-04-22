import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoList } from "./TodoList";
import { describe, test, expect, beforeEach } from "vitest";

describe("TodoList Component", () => {
  describe("Rendering", () => {
    test("renders empty todo list", () => {
      render(<TodoList />);
      expect(screen.getByRole("heading", { name: /todo list/i })).toBeInTheDocument();
      expect(screen.getByTestId("todo-input")).toBeInTheDocument();
      expect(screen.getByTestId("add-button")).toBeInTheDocument();
      expect(screen.getByTestId("todo-count")).toHaveTextContent("0 todos (0 completed)");
    });

    test("renders with initial todos", () => {
      const initialTodos = [
        { id: 1, text: "Buy groceries", completed: false },
        { id: 2, text: "Walk the dog", completed: true },
      ];
      render(<TodoList initialTodos={initialTodos} />);

      expect(screen.getByText("Buy groceries")).toBeInTheDocument();
      expect(screen.getByText("Walk the dog")).toBeInTheDocument();
      expect(screen.getByTestId("todo-count")).toHaveTextContent("2 todos (1 completed)");
    });
  });

  describe("Adding Todos", () => {
    test("adds a new todo when clicking Add button", async () => {
      const user = userEvent.setup();
      render(<TodoList />);

      const input = screen.getByTestId("todo-input");
      const addButton = screen.getByTestId("add-button");

      await user.type(input, "New todo item");
      await user.click(addButton);

      expect(screen.getByText("New todo item")).toBeInTheDocument();
      expect(input).toHaveValue("");
      expect(screen.getByTestId("todo-count")).toHaveTextContent("1 todos (0 completed)");
    });

    test("adds a new todo when pressing Enter", async () => {
      const user = userEvent.setup();
      render(<TodoList />);

      const input = screen.getByTestId("todo-input");

      await user.type(input, "Todo via Enter{Enter}");

      expect(screen.getByText("Todo via Enter")).toBeInTheDocument();
      expect(input).toHaveValue("");
    });

    test("does not add empty todo", async () => {
      const user = userEvent.setup();
      render(<TodoList />);

      const addButton = screen.getByTestId("add-button");
      await user.click(addButton);

      expect(screen.getByTestId("todo-count")).toHaveTextContent("0 todos");
    });

    test("trims whitespace from todo text", async () => {
      const user = userEvent.setup();
      render(<TodoList />);

      const input = screen.getByTestId("todo-input");
      const addButton = screen.getByTestId("add-button");

      await user.type(input, "  Trimmed todo  ");
      await user.click(addButton);

      expect(screen.getByText("Trimmed todo")).toBeInTheDocument();
    });
  });

  describe("Toggling Todos", () => {
    test("toggles todo completion status", async () => {
      const user = userEvent.setup();
      const initialTodos = [{ id: 1, text: "Test todo", completed: false }];
      render(<TodoList initialTodos={initialTodos} />);

      const checkbox = screen.getByTestId("todo-checkbox-1");
      expect(checkbox).not.toBeChecked();

      await user.click(checkbox);
      expect(checkbox).toBeChecked();
      expect(screen.getByTestId("todo-count")).toHaveTextContent("1 todos (1 completed)");

      await user.click(checkbox);
      expect(checkbox).not.toBeChecked();
      expect(screen.getByTestId("todo-count")).toHaveTextContent("1 todos (0 completed)");
    });

    test("applies completed class when todo is completed", async () => {
      const user = userEvent.setup();
      const initialTodos = [{ id: 1, text: "Test todo", completed: false }];
      render(<TodoList initialTodos={initialTodos} />);

      const todoItem = screen.getByTestId("todo-item");
      expect(todoItem).not.toHaveClass("completed");

      const checkbox = screen.getByTestId("todo-checkbox-1");
      await user.click(checkbox);

      expect(todoItem).toHaveClass("completed");
    });
  });

  describe("Deleting Todos", () => {
    test("deletes a todo when clicking delete button", async () => {
      const user = userEvent.setup();
      const initialTodos = [
        { id: 1, text: "Todo to delete", completed: false },
        { id: 2, text: "Todo to keep", completed: false },
      ];
      render(<TodoList initialTodos={initialTodos} />);

      expect(screen.getByText("Todo to delete")).toBeInTheDocument();
      expect(screen.getByTestId("todo-count")).toHaveTextContent("2 todos");

      const deleteButton = screen.getByTestId("delete-button-1");
      await user.click(deleteButton);

      expect(screen.queryByText("Todo to delete")).not.toBeInTheDocument();
      expect(screen.getByText("Todo to keep")).toBeInTheDocument();
      expect(screen.getByTestId("todo-count")).toHaveTextContent("1 todos");
    });

    test("updates count correctly after deletion", async () => {
      const user = userEvent.setup();
      const initialTodos = [
        { id: 1, text: "Todo 1", completed: true },
        { id: 2, text: "Todo 2", completed: false },
      ];
      render(<TodoList initialTodos={initialTodos} />);

      expect(screen.getByTestId("todo-count")).toHaveTextContent("2 todos (1 completed)");

      const deleteButton = screen.getByTestId("delete-button-1");
      await user.click(deleteButton);

      expect(screen.getByTestId("todo-count")).toHaveTextContent("1 todos (0 completed)");
    });
  });

  describe("Todo Count", () => {
    test("displays correct count for multiple todos", async () => {
      const user = userEvent.setup();
      render(<TodoList />);

      const input = screen.getByTestId("todo-input");
      const addButton = screen.getByTestId("add-button");

      await user.type(input, "Todo 1");
      await user.click(addButton);
      await user.type(input, "Todo 2");
      await user.click(addButton);
      await user.type(input, "Todo 3");
      await user.click(addButton);

      expect(screen.getByTestId("todo-count")).toHaveTextContent("3 todos (0 completed)");

      const firstCheckbox = screen.getByTestId("todo-checkbox-" + screen.getAllByTestId(/todo-checkbox-/)[0].getAttribute("data-testid")?.split("-")[2]);
      await user.click(firstCheckbox);

      expect(screen.getByTestId("todo-count")).toHaveTextContent("3 todos (1 completed)");
    });
  });

  describe("Integration Tests", () => {
    test("complete workflow: add, toggle, and delete todos", async () => {
      const user = userEvent.setup();
      render(<TodoList />);

      const input = screen.getByTestId("todo-input");
      const addButton = screen.getByTestId("add-button");

      // Add first todo
      await user.type(input, "First todo");
      await user.click(addButton);

      // Add second todo
      await user.type(input, "Second todo");
      await user.click(addButton);

      expect(screen.getByTestId("todo-count")).toHaveTextContent("2 todos (0 completed)");

      // Complete first todo
      const todos = screen.getAllByTestId("todo-item");
      const firstCheckbox = todos[0].querySelector('input[type="checkbox"]') as HTMLInputElement;
      await user.click(firstCheckbox);

      expect(screen.getByTestId("todo-count")).toHaveTextContent("2 todos (1 completed)");

      // Delete second todo
      const deleteButtons = screen.getAllByRole("button", { name: /delete/i });
      await user.click(deleteButtons[1]);

      expect(screen.getByTestId("todo-count")).toHaveTextContent("1 todos (1 completed)");
      expect(screen.getByText("First todo")).toBeInTheDocument();
      expect(screen.queryByText("Second todo")).not.toBeInTheDocument();
    });
  });
});
