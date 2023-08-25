import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Chat.css";
export const Chat = () => {
  const navigate = useNavigate();
  // const { state } = useLocation();
  // const { name, id } = state;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const handleSubmitChat = (data) => {
    navigate(`/chat/${data.room}/chat-room`)
    reset();
  };
  const name = "Name";
  return (
    <div className="chat-container">
      <h1>Чат клиента: {name}</h1>
      <button onClick={() => navigate("/")}>Перейти на главную страницу</button>

      <form className="chat-form" onSubmit={handleSubmit(handleSubmitChat)}>
        {/* {% csrf_token %} */}
        <label className="chat-label">
        What chat room would you like to enter?
        <input
          id="room-name-input"
          type="text"
          {...register("room", {
            required: "Enter something"
          })}
        />
        <span className="">{errors?.room && errors.room.message}</span>
        </label>
        <button>
          Перейти в комнату
        </button>
      </form>
    </div>
  );
};
