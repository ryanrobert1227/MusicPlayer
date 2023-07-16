import React, { useState, useRef, useEffect } from "react";

import data from "./music.js";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  const [music, setMusic] = useState(
    localStorage.getItem("lastMusic") ? localStorage.getItem("lastMusic") : 0
  );
  const audioRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("lastMusic", music);
  }, [music]);

  console.log(music);

  return (
    <>
      <Header />
      <Main setMusic={setMusic} audioRef={audioRef} />
      <audio src={data[music].url} ref={audioRef} />
      <Footer
        music={music}
        setMusic={setMusic}
        audioRef={audioRef}
        useRef={useRef}
      />
    </>
  );
}

export default App;
