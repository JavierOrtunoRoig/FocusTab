import { useTodosStore } from "@/stores/useTodos";
import { Input } from "@/components/ui/input";
import { Widget, WidgetContent, WidgetHeader, WidgetSeparator } from "../widget";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Trash } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

export const TodolistWidget = () => {

  const title = useTodosStore(state => state.title);
  const tasks = useTodosStore(state => state.tasks);
  const changeWidgetTitle = useTodosStore(state => state.changeWidgetTitle);
  const addNewTask = useTodosStore(state => state.addNewTask);
  const deleteTask = useTodosStore(state => state.deleteTask);
  const toggleCompleted = useTodosStore(state => state.toggleCompleted);

  const porcentage = tasks.filter(t => t.completed).length / tasks.length * 100
  
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleNewTask = (title: string) => {
    addNewTask(title);
    setNewTaskTitle('');
  }
  
  return (
    <Widget >
      <WidgetHeader title={title} changeWidgetTitle={changeWidgetTitle} />
      <WidgetSeparator />
      <WidgetContent>
        <div className="w-full flex gap-2">
          <Input value={newTaskTitle} onChange={(e) => setNewTaskTitle(e.target.value)} />
          <Button variant="ghost" size="icon" onClick={() => handleNewTask(newTaskTitle)}>
            <Plus />
          </Button>
        </div>
        <div className="w-full flex flex-col">
        <div className="w-full flex gap-2 items-center">
          <Progress value={porcentage} />
          <p className="min-w-fit">{porcentage.toFixed(2)}%</p>
        </div>
        {
          tasks.map((task, index) => (
            <div key={task.id}>
              <div className="flex p-1 gap-2 justify-between">
                <div className="flex gap-2">
                  <input type="checkbox" checked={task.completed} onChange={() => toggleCompleted(task)} />
                  <p className={`${task.completed && 'line-through'}`} onClick={() => toggleCompleted(task)}>{task.title}</p>
                </div>
                <Button variant="ghost" size="iconSm" onClick={() => deleteTask(task)}>
                  <Trash color="red" />
                </Button>
              </div>
              {index !== tasks.length - 1 && <Separator />}
            </div>
          ))
        }
        </div>
      </WidgetContent>
    </Widget>
  );
}
