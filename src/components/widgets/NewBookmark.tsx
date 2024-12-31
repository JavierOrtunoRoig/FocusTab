import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogClose, DialogDescription } from "@/components/ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useState } from "react";
import { useBookmarksStore } from "@/stores/useBookmarks";

export const NewBookmark = () => {
    
  const [newTitle, setNewTitle] = useState('');
  const [newUrl, setNewUrl] = useState('');

  const addBookmark = useBookmarksStore(state => state.addBookmark)

  const handleNewBookmark = () => {
    addBookmark({
      title: newTitle,
      url: newUrl
    });

    setNewTitle('')
    setNewUrl('')
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex flex-col items-center gap-1">
          <Button variant={"outline"} size={"bookmark"}>
            <Plus />
          </Button>
          <span className="text-sm max-w-16 truncate ">New</span>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a new bookmark</DialogTitle>
          <DialogDescription/>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-row-4 items-center gap-4">
            <Label htmlFor="title">
              Title
            </Label>
            <Input
              id="title"
              className="col-span-3"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              />
          </div>
          <div className="grid grid-row-4 items-center gap-4">
            <Label htmlFor="url">
              Url
            </Label>
            <Input
              id="url"
              className="col-span-3"
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
            <DialogClose asChild>
            <Button type="button" variant="default" onClick={handleNewBookmark}>
              Save bookmark
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
