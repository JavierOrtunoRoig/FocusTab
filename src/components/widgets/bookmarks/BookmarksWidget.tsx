import { useBookmarksStore } from "@/stores/useBookmarks";
import { Widget, WidgetContent, WidgetHeader, WidgetSeparator } from "../widget";
import { Bookmark } from "./Bookmark";
import { BookmarksSeetings } from "./EditBookmarkHeader";

export const BookmarksWidget = () => {

  const bookmarks = useBookmarksStore(state => state.bookmarks);

   return (
    <Widget>
      <WidgetHeader>
        <BookmarksSeetings />
      </WidgetHeader>
      <WidgetSeparator />
      <WidgetContent>
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.url} title={bookmark.title} url={bookmark.url} />
        ))}
        <Bookmark />
      </WidgetContent>
    </Widget>
  );
}
