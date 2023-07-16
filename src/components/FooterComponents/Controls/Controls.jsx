import React, { useState, useEffect } from "react";

import data from "../../../music.js";

import { ReactComponent as Stop } from "../../../assets/stop.svg";
import { ReactComponent as Previous } from "../../../assets/previous.svg";
import { ReactComponent as Pause } from "../../../assets/pause.svg";
import { ReactComponent as Play } from "../../../assets/play.svg";
import { ReactComponent as Next } from "../../../assets/next.svg";
import autoplay from "../../../assets/autoplay.png";

import "./style.css";

export default function Controls(props) {
  const { audioRef, time, setTime, allTime, music, setMusic } = props;

  const [isClick, setIsClick] = useState(false);
  const [notEffect, setNotEffect] = useState(true);
  const [autoPlay, setAutoPlay] = useState(false);

  function handleStop() {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsClick(false);
  }

  function handlePrevious(e) {
    if (e.detail === 1) {
      audioRef.current.currentTime -= 10;
      setTimeout(() => {
        handlePlay();
      }, 200);
      return;
    }

    if (music - 1 < 0) {
      setMusic(data.length - 1);
      setTimeout(() => {
        handlePlay();
      }, 1);
      return;
    }
    setMusic(music - 1);
    setTimeout(() => {
      handlePlay();
    }, 1);
  }

  function handlePlay() {
    audioRef.current.play();
    setIsClick(true);
  }

  function handlePause() {
    audioRef.current.pause();
    setIsClick(false);
  }

  function handleNext(e) {
    if (e?.detail === 1) {
      audioRef.current.currentTime += 10;
      setTimeout(() => {
        handlePlay();
      }, 200);
      return;
    }

    if (music + 1 > data.length - 1) {
      setMusic(0);
      setTimeout(() => {
        handlePlay();
      }, 1);
      return;
    }
    setMusic(music + 1);
    setTimeout(() => {
      handlePlay();
    }, 1);
    return;
  }

  // document.addEventListener("keydown", (e) => {
  //   if (e.key === "ArrowLeft" && time - 10 >= 0) {
  //     setTime(time - 10);
  //     audioRef.current.currentTime = time;
  //   }
  //   if (e.key === "ArrowRight" && time + 10 <= allTime) {
  //     setTime(time + 10);
  //     audioRef.current.currentTime = time;
  //   }
  // });

  // autochange musics

  useEffect(() => {
    if (time === allTime && allTime > 1 && autoPlay) {
      setMusic(Math.round(Math.random() * (data.length - 0) + 0));
      setTimeout(() => {
        handlePlay();
      }, 200);
    }
  }, [time]);

  // autoplay musics

  useEffect(() => {
    if (!notEffect) {
      setTimeout(() => {
        handlePlay();
      }, 200);
    }
    setNotEffect(false);
  }, [music]);

  return (
    <div className="buttons">
      <button onClick={() => handleStop()}>
        <Stop />
      </button>
      <button onClick={(e) => handlePrevious(e)}>
        <Previous />
      </button>
      {isClick ? (
        <button onClick={() => handlePause()}>
          <Pause className="play" />
        </button>
      ) : (
        <button onClick={() => handlePlay()}>
          <Play className="play" />
        </button>
      )}
      <button onClick={(e) => handleNext(e)}>
        <Next />
      </button>
      <button>
        <img
          style={
            autoPlay
              ? {
                  opacity: "1",
                }
              : {
                  opacity: "0.7",
                  border: "solid 2px transparent",
                  borderRadius: "50%",
                }
          }
          onClick={() => setAutoPlay(!autoPlay)}
          className="diferent"
          src={autoplay}
        />
      </button>
    </div>
  );
}
