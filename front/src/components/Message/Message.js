// Сообщение
export const Message = (props) => {
  const { message } = props;
  return (
    <div>
      <img src={message.url} alt="" style={{ width: "20px", heigh: "20px" }} />
      <p>{message.author}</p>
      <p>{message.text}</p>
    </div>
  );
};
