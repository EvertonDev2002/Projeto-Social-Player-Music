import "./player.css";
import React, { useState } from "react";

export default function Nav(props) {
  const [play, setPlay] = useState(false);
  const [icon, setIcon] = useState("fas fa-play");

  function Click() {
    const audio = document.querySelector("#play");
    audio.volume = 0.5;

    if (play) {
      audio.pause();
      setPlay(false);
      setIcon("fas fa-play");
    } else {
      audio.play();
      audio.autoplay = true
      audio.load()
      setPlay(true);
      setIcon("fas fa-pause");
    }
  }

  return (
    <span className={"player-span player-span-mobile " + icon} onClick={Click}>
      <audio id="play" preload="auto" loop>
        <source src={props.Music} type="audio/mpeg" />
      </audio>
    </span>
  );
}
