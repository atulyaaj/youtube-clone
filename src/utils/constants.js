const GOOGLE_API_KEY = "AIzaSyBQAlRJAk5rGGaVA9r6wruc2WCqN9PRo6c";

export const LIVE_CHAT_COUNT = 10;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_RESULT_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=" +
  GOOGLE_API_KEY +
  "&q=";
