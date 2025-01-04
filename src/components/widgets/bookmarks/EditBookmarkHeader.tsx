import { useBookmarksStore } from "@/stores/useBookmarks";
import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { BookmarkRow } from "./BookmarkRow";

export const BookmarksSeetings = () => {

  const bookmarks = useBookmarksStore(state => state.bookmarks);

  return (
    <>
      <DialogHeader>
        <DialogTitle>Edit bookmarks</DialogTitle>
        <DialogDescription/>
      </DialogHeader>
      <div>
        {bookmarks.map((bk, index) => (
          <BookmarkRow key={bk.url} title={bk.title} url={bk.url} showSeparator={index !== (bookmarks.length - 1)}/>
        ))}
      </div>
    </>
  )
}
