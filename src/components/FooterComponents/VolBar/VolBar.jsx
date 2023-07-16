import React, { useRef, useState } from "react";

import { BsFillVolumeUpFill, BsVolumeMuteFill } from "react-icons/bs";

import "./style.css";

export default function VolBar(props) {
  const { audioRef, distanceFooterRef } = props;

  const [percetage, setPercetage] = useState(100);
  const [isMuted, setIsMuted] = useState(false);

  const boxBarRef = useRef(null);
  const volBarRef = useRef(null);

  function handleUpdateVolBarOnClick(e) {
    setIsMuted(false);
    // achar o local que foi clicado

    const pointClicked =
      e.clientY -
      distanceFooterRef.current?.offsetTop -
      boxBarRef.current.offsetTop -
      30;
    const calculationOfPercentage =
      (pointClicked * 100) / volBarRef.current.offsetHeight; // 100 referente a 100% e 500 referente ao tamanho total da barra
    const barLocation = (100 * calculationOfPercentage) / 100;

    // seta o local onde  barrinha via estar, ternario para evita bug do valor vim acima de 100

    (barLocation - 100) * -1 > 100
      ? setPercetage(100)
      : setPercetage((barLocation - 100) * -1);

    // formatar e mudar o volume da musica

    let response = 0;

    if (Number(barLocation / 100).toFixed(2) >= 1) {
      response = 1;
    } else if (Number(barLocation / 100).toFixed(2) <= 0) {
      response = 0;
    } else {
      response = Number(barLocation / 100).toFixed(2);
    }

    audioRef.current.volume = (response - 1) * -1;

    localStorage.setItem("volumeAtual", (response - 1) * -1);
  }

  return (
    <>
      {isMuted ? (
        <BsVolumeMuteFill
          className="volume-icon"
          onClick={() => {
            setPercetage(localStorage.getItem("volumeAtual") * 100);
            audioRef.current.volume = Number(
              localStorage.getItem("volumeAtual")
            ).toFixed(2);
            setIsMuted(false);
            return;
          }}
        />
      ) : (
        <BsFillVolumeUpFill
          className="volume-icon"
          onClick={() => {
            setPercetage(0);
            setIsMuted(true);
            audioRef.current.volume = 0;
            return;
          }}
        />
      )}
      <div className="box" ref={boxBarRef}>
        <div
          className="vol-range"
          ref={volBarRef}
          onClick={(e) => handleUpdateVolBarOnClick(e)}
        >
          <div style={{ height: percetage + "%" }} className="vol-progress">
            <div className="vol-pointer"></div>
          </div>
        </div>
      </div>
    </>
  );
}
