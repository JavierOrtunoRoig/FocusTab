import { useBookmarksStore } from "@/stores/useBookmarks";
import { Bookmark } from "./Bookmark"
import { Separator } from "../ui/separator";
import { EditBookmarkHeader } from "./EditBookmarkHeader";

export const BookmarksContainer = () => {

  const bookmarks = useBookmarksStore(state => state.bookmarks);

  return (
    <div className="flex flex-col h-fit bg-white rounded">
      <EditBookmarkHeader />
      <Separator />

      <div className="p-2 flex gap-2 flex-wrap">
        {bookmarks.map(bookmark => <Bookmark key={bookmark.url} title={bookmark.title} url={bookmark.url} />)}
        <Bookmark />
      </div>
    </div>
  )
}
