import { useBookmarksStore } from "@/stores/useBookmarks";
import { Widget, WidgetContent, WidgetHeader, WidgetSeparator } from "../widget";
import { Bookmark } from "./Bookmark";
import { BookmarksSeetings } from "./EditBookmarkHeader";

export const BookmarksWidget = () => {

  const bookmarks = useBookmarksStore(state => state.bookmarks);
  const title = useBookmarksStore(state => state.title);
  const changeWidgetTitle = useBookmarksStore(state => state.changeWidgetTitle);

   return (
    <Widget>
      <WidgetHeader title={title} changeWidgetTitle={changeWidgetTitle}>
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
