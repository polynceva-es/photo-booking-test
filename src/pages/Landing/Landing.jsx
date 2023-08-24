import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Landing.css";
export const Landing = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({mode: 'onChange'});

  const onSubmit = (data) => {
    console.log(isValid);
    console.log(data);
    reset();
    console.log("reset")

  };


  return (
    <div className={"landing-container"}>
      <h1>Лэндинг</h1>
      <button onClick={() => navigate("/sign-in")}>Войти</button>
      {/* _____________________________________________________________ */}
    </div>
  );
};
