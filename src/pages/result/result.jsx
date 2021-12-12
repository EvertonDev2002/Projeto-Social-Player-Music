import React from "react";
import Nav from "../../components/nav/nav.jsx";
import Logo from "../../components/logo/logo.jsx";
import Home from "../../components/home/home.jsx";
import Line from "../../components/line/line.jsx";
import Center from "../../components/center/center.jsx";
import Player from "../../components/player/player.jsx";
import Message from "../../components/message/message.jsx";
import Music from "../../components/player/sound/sound_02.mp3";

export default function PagePageResult() {
  return (
    <Center>
      <Line line="1" />
      <Logo />
      <Message />
      <Nav>
        <Home />
        <Player Music={Music} />
      </Nav>
    </Center>
  );
}
