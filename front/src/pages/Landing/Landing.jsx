import { useNavigate } from "react-router-dom";
import "./Landing.css";
export const Landing = () => {
  const navigate = useNavigate();
  const id = 1;

  return (
    <div className={"landing-container"}>
      <h1>Лэндинг</h1>
      <button onClick={() => navigate("/sign-in")}>Войти</button>
      {/* _____________________________________________________________ */}
      <button onClick={() => navigate(`/chat/`)}>Перейти в чат</button>
      {/* _____________________________________________________________ */}
      <button onClick={() => navigate(`/profile`)}>Перейти в profile</button>
    </div>
  );
};
