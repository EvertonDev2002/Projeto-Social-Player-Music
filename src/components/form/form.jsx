import "./form.css";
import { useNavigate } from "react-router-dom";


export default function Form() {
  const history = useNavigate()
  localStorage.setItem("q", "1");
  localStorage.setItem("rc", "0");
  localStorage.setItem("rr", "0");
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
