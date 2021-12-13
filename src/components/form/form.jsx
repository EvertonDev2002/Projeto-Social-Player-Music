import "./form.css";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const history = useNavigate();
  sessionStorage.setItem("question_number", "1");
  sessionStorage.setItem("right_question", "0");
  sessionStorage.setItem("wrong_question", "0");
  const user = localStorage.getItem("user");

  function onChange(ev) {
    const { name, value } = ev.target;
    localStorage.setItem("user", { name, value }.value);
  }

  function NextPage() {
    if (user != null) {
      history("/questions");
    }
  }

  const valueInput = () => {
    if (user === null) {
      return "Nome";
    } else {
      return user;
    }
  };

  return (
    <form className="form">
      <input
        className="form-input"
        type="text"
        placeholder={null ? valueInput() : valueInput()}
        onChange={onChange}
      />
      <button className="form-button" onClick={NextPage}>
        Iniciar
      </button>
    </form>
  );
}
