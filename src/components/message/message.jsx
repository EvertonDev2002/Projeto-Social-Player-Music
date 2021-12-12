import "./message.css";

export default function Message() {
  const result = () => {
    const user = String(localStorage.getItem("user"));
    const respErr = parseInt(localStorage.getItem("rr"));
    const respCert = parseInt(localStorage.getItem("rc"));
    const total =
      parseInt(localStorage.getItem("rc")) +
      "/" +
      parseInt(localStorage.getItem("q"));

    if (respCert === 10 || respCert >= 8) {
      return (
        <>
          <span className="message-span">Total: {total}</span>
          <p className="message-p">
            Parabéns, {user}! Você esteve presente o ano todo!
          </p>
        </>
      );
    } else if (respErr === 10 || respCert <= 4) {
      return (
        <>
          <span className="message-span">Total: {total}</span>
          <p className="message-p">
            {" "}
            Parabéns, {user}! Você é aquele que passa de ano sem ir na sala!
          </p>
        </>
      );
    } else if (respErr <= 5 || respCert === 5) {
      return (
        <>
          <span className="message-span">Total: {total}</span>
          <p className="message-p">
            Parabéns, {user}! Você faltou meio ano, está na média!
          </p>
        </>
      );
    }
  };

  return <div className="message">{result()}</div>;
}
