import Api from "../../service/api.jsx";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/nav/nav.jsx";
import Card from "../../components/card/card.jsx";
import Home from "../../components/home/home.jsx";
import Line from "../../components/line/line.jsx";
import React, { useEffect, useState } from "react";
import Header from "../../components/header/header.jsx";
import Player from "../../components/player/player.jsx";
import Center from "../../components/center/center.jsx";
import Music from "../../components/player/sound/sound_01.mp3";
import Questions from "../../components/questions/questions.jsx";

export default function PageQuestions() {
  const [result, setResult] = useState([]);
  const [question, setQuestions] = useState(0);

  useEffect(() => {
    Api.get(
      `/api?pageNumber=${question}&pageSize=1&sortBy=id&sortDirection=ASC`
    ).then((response) => {
      setResult(response.data.content[0]);
    });
  }, [question]);

  const history = useNavigate();

  function ClickNext(ev) {
    if (result.feedback === ev.target.innerHTML) {
      const Int = parseInt(localStorage.getItem("q")) + 1;
      const rc = parseInt(localStorage.getItem("rc")) + 1;

      if (Int <= 10) {
        localStorage.setItem("q", Int);
        localStorage.setItem("rc", rc);
        setQuestions(Int - 1);
      } else {
        if (rc <= 10) {
          localStorage.setItem("rc", rc);
          history("/result");
        }
      }
    } else {
      const Int = parseInt(localStorage.getItem("q")) + 1;
      const rr = parseInt(localStorage.getItem("rr")) + 1;

      if (Int <= 10) {
        localStorage.setItem("q", Int);
        localStorage.setItem("rr", rr);
        setQuestions(Int - 1);
      } else {
        if (rr <= 10) {
          localStorage.setItem("rr", rr);
          history("/result");
        }
      }
    }
  }

  return (
    <Center>
      <Header questao={localStorage.getItem("q")} />
      <Line line="2" />
      <Card key={result.id} logo={result.photo} />
      <Questions
        titulo={result.question}
        q1={result.alternative_01}
        q2={result.alternative_02}
        q3={result.alternative_03}
        q4={result.alternative_04}
        feedback={result.feedback}
        click={ClickNext}
      />
      <Nav>
        <Home />
        <Player Music={Music} />
      </Nav>
    </Center>
  );
}
