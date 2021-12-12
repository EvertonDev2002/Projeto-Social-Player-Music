import "./card.css";

export default function Card(props) {
  return (
    <article className="card card-mobile">
      <img className="card-img" src={props.logo} alt="Imagem da questão" />
    </article>
  );
}
