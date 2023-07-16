import React, { useRef, useState } from "react";

import data from "../../music.js";

import Controls from "../FooterComponents/Controls/Controls.jsx";
import AudioBar from "../FooterComponents/AudioBar/AudioBar.jsx";
import VolBar from "../FooterComponents/VolBar/VolBar.jsx";

import "./style.css";

export default function Footer(props) {
  const { music, setMusic, audioRef, useRef } = props;

  const [time, setTime] = useState(0);
  const [allTime, setAllTime] = useState(0);

  const distanceFooterRef = useRef(null);

  setInterval(() => {
    setTime(audioRef.current?.currentTime);
  }, 1000);

  setTimeout(() => {
    setAllTime(audioRef.current?.duration);
  }, 1);

  return (
    <footer ref={distanceFooterRef}>
      <div className="tittle">
        <h1>{data[music].title}</h1>
        <h2>{data[music].artist}</h2>
      </div>
      <div className="display">
        <Controls
          audioRef={audioRef}
          time={time}
          setTime={setTime}
          allTime={allTime}
          setMusic={setMusic}
          music={music}
        />
        <AudioBar time={time} allTime={allTime} audioRef={audioRef} />
      </div>
      <div className="right">
        <img
          className="banner"
          src={data[music].cover}
          alt="banner da musica atual"
        />
        <VolBar distanceFooterRef={distanceFooterRef} audioRef={audioRef} />
      </div>
    </footer>
  );
}
