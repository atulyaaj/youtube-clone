import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router";
import { YOUTUBE_SEARCH_RESULT_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import VideoSuggestionCard from "./VideoSuggestionCard";

const SuggestionPage = () => {
  const [videos, setVideos] = useState([]);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    getSearchResults();
  }, [searchParams]);

  const getSearchResults = async () => {
    const data = await fetch(
      YOUTUBE_SEARCH_RESULT_API + searchParams.get("search_query")
    );
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  };

  return (
    <div>
      {videos &&
        videos.map((video) => (
          <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId}>
            <VideoSuggestionCard info={video} />
          </Link>
        ))}
    </div>
  );
};

export default SuggestionPage;
