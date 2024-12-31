import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

export interface Bookmark {
  title: string;
  url: string;
}

type BookmarkStore = {
  title: string;
  bookmarks: Bookmark[];
  changeWidgetTitle: (newTitle: string) => void;
  addBookmark: (newBookmark: Bookmark) => void;
  removeBookmark: (url: string) => void;
  changeBookmarkTitle: (newTitle: string, url: string) => void;
};

export const useBookmarksStore = create<BookmarkStore>()(
  devtools(
    persist(
      (set) => ({
        title: "new bookmarks",
        bookmarks: [],
        changeWidgetTitle: (newTitle) => {
          set(() => ({ title: newTitle }));
        },
        addBookmark: (newBookmark) => {
          set((state) => ({
            bookmarks: [...state.bookmarks, newBookmark],
          }));
        },
        removeBookmark: (url) => {
          set((state) => {
            const newBookmarks = state.bookmarks.filter((bk) => bk.url !== url);

            return {
              bookmarks: newBookmarks,
            };
          });
        },
        changeBookmarkTitle: (newTitle, url) => {
          set((state) => {
            const bookmarkToEdit = state.bookmarks.find((bk) => bk.url === url);

            if (!bookmarkToEdit) throw new Error("Bookmark not found");
            bookmarkToEdit.title = newTitle;

            return {
              bookmarks: [...state.bookmarks],
            };
          });
        },
      }),
      {
        name: "bookmarks",
      }
    )
  )
);
