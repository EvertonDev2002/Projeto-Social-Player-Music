import "./theme/theme.css";
import PageMain from "./pages/main/main.jsx";
import PageResult from "./pages/result/result.jsx";
import PageQuestions from "./pages/questions/questions.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageMain/>} />
        <Route path="/questions" element={<PageQuestions/>} />
        <Route path="/result" element={<PageResult/>} />
      </Routes>
    </BrowserRouter>
  );
}
