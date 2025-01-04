import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { PenLine, Save, Settings } from "lucide-react";
import { useState } from "react";

interface Props {
  children?: React.ReactNode;
  title: string;
  changeWidgetTitle: (newTitle: string) => void;
}

export const WidgetHeader: React.FC<Props> = ({ children, title, changeWidgetTitle }) => {

  const [newTitle, setNewTitle] = useState(title);
  const [editing, setEditing] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      changeWidgetTitle(newTitle);
      toggleEditing();
    }
  };
  
  const toggleEditing = () => {
    setEditing(prevState => !prevState)
  }

  const handleClick = () => {
    toggleEditing();
    if (editing) {
      changeWidgetTitle(newTitle);
    }
  }

  return (
  <header className="p-2 flex justify-between gap-2">
    {
      !editing
        ? <h1 className="text-2xl font-semibold">{title}</h1>
        : <Input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onKeyDown={handleKeyDown} />
    }
    <div className="flex">
      <Button variant={"ghost"} size={"icon"} onClick={handleClick}>
        { !editing ? <PenLine /> : <Save />}  
      </Button>
      
      {
        children && (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={"ghost"} size={"icon"}>
              <Settings />
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-[425px]">
            {children}
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="default">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        )   
      }
      
    </div>
  </header>
);
}
