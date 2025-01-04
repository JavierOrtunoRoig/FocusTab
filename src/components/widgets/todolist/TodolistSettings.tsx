import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useTodosStore } from "@/stores/useTodos";

export const TodolistSettings = () => {

  const tasks = useTodosStore(state => state.tasks);
  
  return (
    <>
      <DialogHeader>
        <DialogTitle>Edit bookmarks</DialogTitle>
        <DialogDescription/>
      </DialogHeader>
      <div>
        {tasks.map((task) => (
          <p>{task.title}</p>
        ))}
      </div>
    </>
  )
}
