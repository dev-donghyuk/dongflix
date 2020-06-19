import React, { useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "./styles";

const data = [
  { key: "/movie", value: "Movie" },
  { key: "/tv", value: "TV" },
  { key: "/search", value: "Search" },
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
              <Link to={`${x.key}`}>{x.value}</Link>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default Header;
