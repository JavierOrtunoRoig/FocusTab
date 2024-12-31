import { Pen } from "lucide-react"
import { Button } from "../ui/button"
import { useBookmarksStore } from "@/stores/useBookmarks";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogClose, DialogDescription } from "@/components/ui/dialog";
import { BookmarkRow } from "./BookmarkRow";

export const EditBookmarkHeader = () => {

  const title = useBookmarksStore(state => state.title);
  const bookmarks = useBookmarksStore(state => state.bookmarks);

  return (
    <header className="p-2 flex justify-between">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"ghost"} size={"icon"}>
            <Pen />
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit title and bookmarks</DialogTitle>
            <DialogDescription/>
          </DialogHeader>
          <div>
            <BookmarkRow title={title} showSeparator={false} />
          </div>
          <div>
            {bookmarks.map((bk, index) => (
              <BookmarkRow key={bk.url} title={bk.title} url={bk.url} showSeparator={index !== (bookmarks.length - 1)}/>
            ))}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="default">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </header>
  )
}
