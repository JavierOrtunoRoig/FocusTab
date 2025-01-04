
interface Props {
  url: string;
  title: string;
}

export const BookmarkItem = ({ url, title }: Props) => {

  const faviconURL = `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${url}&size=64`

  return (
    <a href={url} className="flex flex-col gap-1 items-center">
      <img className="size-14" src={faviconURL}/>
      <span className="text-sm max-w-16 truncate">{title}</span>
    </a>
  )
}
