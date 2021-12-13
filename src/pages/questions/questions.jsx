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
  const [count, setCount] = useState([]);
  const [question, setQuestions] = useState(
    sessionStorage.getItem("question_number")
  );

  useEffect(() => {
    Api.get(`/search/quiz/${question}`).then((response) => {
      setResult(response.data.data[0]);
      setCount(response.data.total[0]);
    });
  }, [question]);

  const history = useNavigate();

  function ClickNext(ev) {
    if (result.feedback === ev.target.innerHTML) {
      const qn = parseInt(sessionStorage.getItem("question_number")) + 1;
      const rq = parseInt(sessionStorage.getItem("right_question")) + 1;

      if (qn <= count.count) {
        sessionStorage.setItem("question_number", qn);
        sessionStorage.setItem("right_question", rq);
        setQuestions(qn);
      } else {
        if (rq <= count.count) {
          sessionStorage.setItem("right_question", rq);
          history("/result");
        }
      }
    } else {
      const qn = parseInt(sessionStorage.getItem("question_number")) + 1;
      const wq = parseInt(sessionStorage.getItem("wrong_question")) + 1;

      if (qn <= count.count) {
        sessionStorage.setItem("question_number", qn);
        sessionStorage.setItem("wrong_question", wq);
        setQuestions(qn);
      } else {
        if (wq <= count.count) {
          sessionStorage.setItem("wrong_question", wq);
          history("/result");
        }
      }
    }
  }

  return (
    <Center>
      <Header questao={sessionStorage.getItem("question_number")} />
      <Line line="2" />
      <Card key={result.id} logo={result.photo} />
      <Questions
        titulo={result.question}
        q1={result.alternativa_01}
        q2={result.alternativa_02}
        q3={result.alternativa_03}
        q4={result.alternativa_04}
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
