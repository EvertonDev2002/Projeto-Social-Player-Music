import "./header.css";

export default function Header(props) {
  return (
    <header className="header">
      <h1 className="header-h1">Questão</h1>
      <p className="header-p">{props.questao}</p>
    </header>
  );
}
