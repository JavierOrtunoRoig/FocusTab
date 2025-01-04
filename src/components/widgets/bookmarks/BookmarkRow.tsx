import { Pen, Save, Trash, X } from 'lucide-react';
import { useBookmarksStore } from '@/stores/useBookmarks';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface Props {
  title: string;
  url?: string;
  showSeparator: boolean;
}

export const BookmarkRow = ({ title, url, showSeparator }: Props) => {
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const removeBookmark = useBookmarksStore(state => state.removeBookmark);
  const changeBookmarkTitle = useBookmarksStore(state => state.changeBookmarkTitle);

  const toggleEditMode = () => setEditing((prev) => !prev);

  const handleSave = () => {
    toggleEditMode();
    if (url) {
      changeBookmarkTitle(newTitle, url);
    }
  };

  const handleCancel = () => {
    setEditing(false);
    setNewTitle(title);
  };

  return (
    <div>
      <div className="py-1 flex justify-between">
        {editing ? (
          <Input size="sm" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
        ) : (
          <p>{newTitle}</p>
        )}

        <div>
          {editing ? (
            <>
              <Button variant="ghost" size="iconSm" onClick={handleSave}>
                <Save />
              </Button>
              <Button variant="ghost" size="iconSm" onClick={handleCancel}>
                <X color="#ef4444" />
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="iconSm" onClick={toggleEditMode}>
                <Pen />
              </Button>
              {url && (
                <Button variant="ghost" size="iconSm" onClick={() => removeBookmark(url)}>
                  <Trash color="#ef4444" />
                </Button>
              )}
            </>
          )}
        </div>
      </div>
      {showSeparator && <Separator />}
    </div>
  );
};
