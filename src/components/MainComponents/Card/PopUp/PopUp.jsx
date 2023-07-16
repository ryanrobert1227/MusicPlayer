import React from "react";

import { ReactComponent as Play } from "../../../../assets/play.svg";

import "./style.css";

export default function PopUp(props) {
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
    setPopup,
  } = props;

  function handlePlayPopup() {
    setMusic(index);
    audioRef.current.play();
    // alert("Music was selected");
    // setIsClick(true);
  }

  return (
    <>
      <div className="page-mask" onClick={() => setPopup(false)}></div>
      <div className="popup">
        <div className="column-one">
          <div className="buttons">
            <div className="mask" onClick={() => handlePlayPopup()}></div>
            <img src={cover} />
            <button>
              <Play className="play" />
            </button>
          </div>

          <h3>{title.trim()}</h3>
          <h4>{artist.trim()}</h4>
          <div className="center">
            <p className="description">{description}</p>
          </div>
        </div>
        <div className="column-two">
          <p>
            {lyrics &&
              lyrics.map((element) => {
                return (
                  <>
                    <span>
                      {element.verse.map((element, index) => {
                        return (
                          <>
                            <span key={index}>{element}</span>
                            <br />
                          </>
                        );
                      })}
                    </span>
                    <br />
                  </>
                );
              })}
          </p>
        </div>
      </div>
    </>
  );
}
