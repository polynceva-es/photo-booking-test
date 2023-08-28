import React, { useState, useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./ChatRoom.css";

const wsChanel = new WebSocket(
  "ws://echo.websocket.events/"
);

wsChanel.onopen = () => {
  console.log("onConnect");
}

export const ChatRoom = () => {
  const navigate = useNavigate();
  // const { state } = useLocation();
  // const { name, id } = state;
  const name = "Name";
  const [messages, setMessages] = useState([]);

  const onMessage = (evt) => {
    // let newMessages = JSON.parse(evt.data);
    let newMessage = {author: evt.data, text: evt.data};
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  }

  useEffect(() => {
    console.log("hey");
    wsChanel.addEventListener("message", onMessage);
    console.log("end");
  }, []);

  return (
    <>
      <div className="chat-room">
        <h1>Chat-room клиента: {name}</h1>
        <button onClick={() => navigate("/")}>
          Перейти на главную страницу
        </button>
        <button onClick={() => navigate(`/chat/`)}>Перейти в чат</button>
      </div>
      <div className="chat-room">
        <Messages messages={messages} />
        <AddMessageForm />
      </div>
    </>
  );
};

const Messages = (props) => {
  const { messages } = props;
  return (
    <div style={{ height: "400px", overflow: "auto" }}>
      {messages.map((message, i) => {
        return <Message key={i} message={message} />;
      })}
    </div>
  );
};

const Message = (props) => {
  const { message } = props;
  return (
    <div>
      <img src={message.url} alt="" style={{ width: "20px", heigh: "20px" }} />
      <p>{message.author}</p>
      <p>{message.text}</p>
    </div>
  );
};

const AddMessageForm = () => {
  const [message, setMessage] = useState("");
  const sendMessage = () => {
    if(!message) {return;}
    wsChanel.send(message);
    setMessage('');
  };
  return (
    <div>
      <textarea
        onChange={(evt) => {
          setMessage(evt.currentTarget.value);
        }}
        value={message}
      ></textarea>
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};
