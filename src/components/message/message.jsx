import "./message.css";

export default function Message() {
  const result = () => {
    const user = String(localStorage.getItem("user"));
    const respCert = parseInt(sessionStorage.getItem("right_question"));
    const total = parseInt(sessionStorage.getItem("question_number"));
    const ratio =
      parseInt(sessionStorage.getItem("right_question")) +
      "/" +
      parseInt(sessionStorage.getItem("question_number"));

    if (Math.round((respCert / total) * 100) >= 80) {
      return (
        <>
          <span className="message-span">Total: {ratio}</span>
          <p className="message-p">
            Parabéns, {user}! Você prestou atenção o tempo todo!
          </p>
        </>
      );
    } else if (Math.round((respCert / total) * 100) <= 50) {
      return (
        <>
          <span className="message-span">Total: {ratio}</span>
          <p className="message-p">
            Ei, {user}, vamos revisar mais pouco o conteúdo!
          </p>
        </>
      );
    } else if (
      Math.round((respCert / total) * 100) >= 50 &&
      Math.round((respCert / total) * 100) <= 80
    ) {
      return (
        <>
          <span className="message-span">Total: {ratio}</span>
          <p className="message-p">
            Parabéns, {user}! Mais um pouco e você estaria entre os melhores!
          </p>
        </>
      );
    }
  };

  return <div className="message">{result()}</div>;
}
