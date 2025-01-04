import { BookmarkItem } from "./BookmarkItem";
import { NewBookmark } from "./NewBookmark";

interface Props {
  title?: string;
  url?: string
}

export const Bookmark = (props: Props) => {

  const { title, url } = props;

  return (
    !title || !url
      ? <NewBookmark />
      : <BookmarkItem title={title} url={url} />
  )
}
