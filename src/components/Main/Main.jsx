import React, { useState } from "react";

import data from "../../music.js";

import Card from "../MainComponents/Card/Card.jsx";
import SearchBar from "../MainComponents/SearchBar/SearchBar.jsx";

import "./style.css";

export default function Main(props) {
  const { setMusic, audioRef } = props;

  const [activeBtn, setActiveBtn] = useState(false);
  const [page, setPage] = useState({
    min: 0,
    max: 19,
  });
  const [search, setSearch] = useState("");

  return (
    <main>
      <SearchBar setSearch={setSearch} />
      <h1>The best play list</h1>
      <div className="container">
        {data
          .filter(
            (element) =>
              element.title
                .toLowerCase()
                .includes(search.toLowerCase().trim()) ||
              element.artist.toLowerCase().includes(search.toLowerCase().trim())
          )
          .map((element, index) => {
            if (index <= page.max && index >= page.min) {
              return (
                <Card
                  key={element.id}
                  id={element.id}
                  cover={element.cover}
                  title={element.title}
                  description={element.description}
                  url={element.url}
                  artist={element.artist}
                  lyrics={element?.lyrics}
                  index={element.id - 1}
                  setMusic={setMusic}
                  audioRef={audioRef}
                />
              );
            }
          })}
      </div>
      <div className="btn-pagination-container">
        {data
          .filter(
            (element) =>
              element.title.toLowerCase().includes(search.toLowerCase()) ||
              element.artist.toLowerCase().includes(search.toLowerCase())
          )
          .filter((element) => element.id <= Math.ceil(data.length / 20))
          .map((element, index) => {
            return (
              <button
                key={element.id}
                className={
                  activeBtn == index + 1 ? "active_button" : "btn-pagination"
                }
                value={element.id}
                onClick={(e) => {
                  setPage({
                    min: 0 + (20 * element.id - 20),
                    max: 19 + (20 * element.id - 20),
                  });
                  setActiveBtn(e.target.value);
                }}
              >
                {element.id}
              </button>
            );
          })}
      </div>
    </main>
  );
}
