import { formatViews, formatTimeAgo } from "../utils/helper";

const VideoCard = ({ info }) => {
  //   console.log(info);

  // if (!info) return <div>Loading....</div>;

  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title, publishedAt } = snippet;

  return (
    <div className="p-2 my-2 mx-1 w-78 cursor-pointer">
      <img
        className="rounded-xl mb-3"
        alt="thumbnail"
        src={thumbnails?.medium?.url}
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

// High Order Component
export const AdVideoCard = ({ info }) => {
  return (
    <div>
      <VideoCard info={info} />
      <p className="text-gray-500 text-xs italic px-15">
        Ad • Promoted Content
      </p>
    </div>
  );
};

export default VideoCard;
