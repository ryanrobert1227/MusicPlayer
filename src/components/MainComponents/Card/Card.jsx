import React, { useState } from "react";

import { AiFillPlayCircle } from "react-icons/ai";
import PopUp from "./PopUp/PopUp";

import blackSquare from "../../../assets/blacksquare.jpg";

import "./style.css";

export default function Card(props) {
  const {
    id,
    title,
    artist,
    description,
    cover,
    lyrics,
    index,
    setMusic,
    audioRef,
  } = props;

  const [popup, setPopup] = useState(false);

  return (
    <>
      {popup && (
        <PopUp
          id={id}
          cover={cover}
          title={title}
          description={description}
          artist={artist}
          lyrics={lyrics}
          index={index}
          setMusic={setMusic}
          audioRef={audioRef}
          setPopup={setPopup}
        />
      )}
      <section onClick={() => setPopup(true)}>
        <img src={blackSquare} className="mask"></img>
        {/* <AiFillPlayCircle className="icone" onClick={() => setMusic(index)} /> */}
        <img className="img" src={cover} />
        <h3>{title}</h3>
        <p>{description}</p>
      </section>
    </>
  );
}
