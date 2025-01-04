import { useBookmarksStore } from "@/stores/useBookmarks";
import { Bookmark } from "./Bookmark"
import { EditBookmarkHeader } from "./EditBookmarkHeader";
import { Widget } from "./widget/Widget";
import { WidgetHeader } from "./widget/WidgetHeader";
import { WidgetContent } from "./widget/WidgetContent";
import { WidgetSeparator } from "./widget/WidgetSeparator";

export const BookmarksContainer = () => {

  const bookmarks = useBookmarksStore(state => state.bookmarks);

   return (
    <Widget>
      <WidgetHeader>
        <EditBookmarkHeader />
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
