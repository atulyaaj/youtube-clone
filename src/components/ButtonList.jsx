import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Live",
  "Music",
  "Mixes",
  "Jukebox",
  "Podcasts",
  "News",
  "Cooking",
  "Cricket",
  "Restaurants",
  "Gadgets",
  "Remix"
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
