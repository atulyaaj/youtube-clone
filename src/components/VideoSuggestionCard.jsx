import { getRandomViews, formatTimeAgo } from "../utils/helper";

const VideoSuggestionCard = ({ info }) => {
  // console.log(info);

  const { snippet } = info;
  const { channelTitle, thumbnails, title, publishedAt, description } = snippet;

  return (
    <div className="flex w-full max-w-[1150px] m-6 cursor-pointer">
      <img
        className="w-[500px] rounded-xl hover:rounded-none object-cover flex-shrink-0"
        alt="thumbnail"
        src={thumbnails?.medium?.url}
      />

      <div className="ml-4">
        <h3 className="text-lg font-normal line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-xs">
          {getRandomViews()} views • {formatTimeAgo(publishedAt)}
        </p>

        <div className="flex gap-2 py-3">
          <img
            src={thumbnails?.medium?.url}
            alt="channel"
            className="w-6 h-6 rounded-full"
          />
          <p className="text-gray-600 text-xs py-1">{channelTitle}</p>
        </div>
        <p className="text-xs text-gray-600 mb-2">{description}</p>
      </div>
    </div>
  );
};

export default VideoSuggestionCard;
