import React, { useRef } from "react";

import "./style.css";

export default function AudioBar(props) {
  const { time, allTime, audioRef } = props;

  const barRef = useRef(null);

  function handleUpdateBarOnClick(e) {
    const pointClicked = e.clientX - barRef.current.offsetLeft;
    const calculationOfPercentage =
      (pointClicked * 100) / barRef.current.offsetWidth; // 100 referente a 100%
    const barLocation = (allTime * calculationOfPercentage) / 100;
    audioRef.current.currentTime = barLocation;
  }

  return (
    <div className="time">
      <span>
        {time >= 59
          ? String(Math.floor(Number(time) / 60)).padStart(2, "0") +
            ":" +
            String(Math.floor(Number(time) % 60)).padStart(2, "0")
          : "00:" + String(Math.round(time)).padStart(2, "0")}
      </span>
      <div
        className="range"
        ref={barRef}
        onClick={(e) => handleUpdateBarOnClick(e)}
      >
        <div
          className="progress"
          style={{ width: (time * 100) / allTime + "%" }}
        >
          <div className="pointer"></div>
        </div>
      </div>
      <span>
        {String(Math.floor(Number(allTime) / 60)).padStart(2, "0") +
          ":" +
          String(Math.floor(Number(allTime) % 60)).padStart(2, "0")}
      </span>
    </div>
  );
}
