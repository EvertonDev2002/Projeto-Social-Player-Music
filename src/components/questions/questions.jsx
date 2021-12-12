import "./questions.css";

export default function Questions(props) {
  return (
    <div className="space-questions questions-mobile">
      <h2 className="space-questions-h2 space-questions-h2-mobile">
        {props.titulo}
      </h2>
      <div className="questions">
        <span
          className="questions-span questions-span-mobile"
          onClick={props.click}
        >
          {props.q1}
        </span>
        <span
          className="questions-span questions-span-mobile"
          onClick={props.click}
        >
          {props.q2}
        </span>
        <span
          className="questions-span questions-span-mobile"
          onClick={props.click}
        >
          {props.q3}
        </span>
        <span
          className="questions-span questions-span-mobile"
          onClick={props.click}
        >
          {props.q4}
        </span>
      </div>
    </div>
  );
}
