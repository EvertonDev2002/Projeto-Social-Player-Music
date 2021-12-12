import "./line.css";

export default function Line(props) {
  if (props.line === "1") {
    return (
      <>
        <hr className="line-00- line-mobile- line-00-mobile- line-main" />
        <hr className="line-01- line-mobile- line-01-mobile- line-main" />
        <hr className="line-02- line-mobile- line-02-mobile- line-main" />
        <hr className="line-03- line-mobile- line-03-mobile- line-main" />
      </>
    );
  } else if (props.line === "2") {
    return (
      <>
        <hr className="line-00 line-mobile line-00-mobile question-line" />
        <hr className="line-01 line-mobile line-01-mobile question-line" />
        <hr className="line-02 line-mobile line-02-mobile question-line" />
        <hr className="line-03 line-mobile line-03-mobile question-line" />
      </>
    );
  } else {
    return (
      <p>
        Escolha 1 para linhas para a página principal ou 2 para as questões.
      </p>
    );
  }
}
