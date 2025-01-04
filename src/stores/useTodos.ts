import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

type TodoStore = {
  title: string;
  tasks: Task[];
  changeWidgetTitle: (newTitle: string) => void;
  addNewTask: (title: string) => void;
  toggleCompleted: (task: Task) => void;
  deleteTask: (task: Task) => void;
};

export const useTodosStore = create<TodoStore>()(
  devtools(
    persist(
      (set) => ({
        title: "New Todo List",
        tasks: [],
        changeWidgetTitle: (newTitle) => {
          set(() => ({ title: newTitle }));
        },
        addNewTask: (title) => {
          set((state) => {
            const newTask: Task = {
              id: crypto.randomUUID(),
              completed: false,
              title,
            };
            return {
              tasks: [...state.tasks, newTask],
            };
          });
        },
        toggleCompleted: (task) => {
          set((state) => {
            const selectedTask = state.tasks.find((t) => t.id === task.id);
            const othersTasks = state.tasks.filter((t) => t.id !== task.id);

            if (!selectedTask) throw new Error("Task not found");
            selectedTask.completed = !selectedTask?.completed;

            return {
              tasks: [...othersTasks, selectedTask].sort((a, b) =>
                a.completed === b.completed ? 0 : a.completed ? 1 : -1
              ),
            };
          });
        },
        deleteTask: (task) => {
          set((state) => {
            const filteredTasks = state.tasks.filter((t) => t.id !== task.id);

            return {
              tasks: filteredTasks,
            };
          });
        },
      }),
      {
        name: "todo",
      }
    )
  )
);
