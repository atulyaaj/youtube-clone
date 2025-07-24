const VideoCard = ({ info }) => {
  //   console.log(info);

  if (!info) return <div>Loading....</div>;

  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title, publishedAt } = snippet;

  return (
    <div className="p-2 my-2 mx-1 w-78 cursor-pointer">
      <img
        className="rounded-xl mb-3"
        alt="thumbnail"
        src={thumbnails.medium.url}
      />

      <div className="flex gap-3">
        {/* Channel avatar if available */}
        <img
          src={thumbnails?.standard?.url} // replace with snippet.channelThumbnail?.url if available
          alt="channel"
          className="w-9 h-9 rounded-full"
        />

        <div>
          <h3 className="font-medium text-sm pb-1">{title}</h3>
          <p className="text-gray-600 text-xs">{channelTitle}</p>
          <p className="text-gray-600 text-xs">
            {formatViews(statistics?.viewCount)} views •{" "}
            {formatTimeAgo(publishedAt)}
          </p>
        </div>
      </div>
    </div>
  );
};

// Format views like "678K"
const formatViews = (views) => {
  const num = Number(views);
  if (num >= 1_000_000_000) return `${Math.floor(num / 1_000_000_000)}B`;
  if (num >= 1_000_000) return `${Math.floor(num / 1_000_000)}M`;
  if (num >= 1_000) return `${Math.floor(num / 1_000)}K`;
  return num.toString();
};

// Format time like "46 minutes ago"
const formatTimeAgo = (date) => {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} minutes ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hours ago`;
  const days = Math.floor(hours / 24);
  return `${days} day${days > 1 ? "s" : ""} ago`;
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="relative">
      <span className="absolute right-2 bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded">
        Sponsored
      </span>
      <VideoCard info={info} />
      <p className="text-gray-500 text-xs italic px-15">
        Ad • Promoted Content
      </p>
    </div>
  );
};

export default VideoCard;
