import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  /***
   *
   * searchCache = {
   *   "iphone": ["iphone", "iphone 16"]
   * }
   * searchQuery = iphone
   */

  useEffect(() => {
    // make an api call after every key press
    // but if the difference between 2 API calls is < 200ms
    // decline the API call

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    // console.log("API Call- " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    // update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://www.svgrepo.com/show/506800/burger-menu.svg"
        />
        <Link href="/">
          <img
            className="h-8 mx-2"
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
          />
        </Link>
      </div>
      <div className="col-span-10 relative">
        <div>
          <input
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          />
          <button className="border border-gray-400 px-4 py-2 rounded-r-full bg-gray-100">
            <i className="fa fa-search" style={{ fontSize: "20px" }}></i>
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white border border-gray-200 shadow-xl rounded-xl w-1/2 m-1">
            <ul>
              {suggestions.map((s, i) => (
                <Link
                  to={"/results?search_query=" + encodeURIComponent(s)}
                  key={i}
                >
                  <li className="px-2 py-2 m-2 hover:bg-gray-100 hover:rounded-lg cursor-pointer flex items-center gap-2">
                    <i className="fa fa-search"></i>
                    {s}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-9"
          alt="user"
          src="https://www.svgrepo.com/show/334967/user-circle.svg"
        />
      </div>
    </div>
  );
};

export default Head;
