import React from "react";
import Nav from "../../components/nav/nav.jsx";
import Logo from "../../components/logo/logo.jsx";
import Form from "../../components/form/form.jsx";
import Line from "../../components/line/line.jsx";
import Center from "../../components/center/center.jsx";
import Player from "../../components/player/player.jsx";
import Music from "../../components/player/sound/sound_00.mp3";

export default function PageMain() {
  return (
    <Center>
      <Line line="1" />
      <Logo />
      <Form />
      <Nav>
        <Player Music={Music} />
      </Nav>
    </Center>
  );
}
