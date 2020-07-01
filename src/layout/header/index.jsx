import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Wrapper, Icon } from "./styles";

const data = [
  {
    key: "/movie",
    value: "Movie",
    icon: "movie_icon.png",
    cover: "movie_icon_c.png",
  },
  { key: "/tv", value: "TV", icon: "tv_icon.png", cover: "tv_icon_c.png" },
  {
    key: "/search",
    value: "Search",
    icon: "search_icon.png",
    cover: "search_icon_c.png",
  },
];

const useTabs = (TabValue, Content) => {
  const [currentIndex, setCurrentIndex] = useState(TabValue);
  return {
    currentItem: Content[currentIndex],
    changeItem: setCurrentIndex,
  };
};
const Header = () => {
  const { currentItem, changeItem } = useTabs(0, data);
  // useContext로 currentPage 관리하기
  return (
    <Wrapper>
      <ul>
        {data.map((x, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                changeItem(index);
              }}
              className={currentItem.value === x.value ? "On" : ""}
            >
              <Link to={`${x.key}`}>
                <Icon
                  iconUrl={x.icon}
                  coverUrl={x.cover}
                  className="Icon"
                ></Icon>
              </Link>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default Header;
