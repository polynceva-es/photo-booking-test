import React, { useState, useEffect } from "react";
// Форма добавить сообщение
export const AddMessageForm = (props) => {
  const [message, setMessage] = useState("");
  const [readyState, setReadyState] = useState(false);
  const { wsChanel } = props;

   useEffect(() => {
    const onOpen = () => {
      setReadyState(true);
    }
    wsChanel?.addEventListener("open", onOpen);
    return () => {
      wsChanel?.removeEventListener("open", onOpen)
    }
  }, [wsChanel]);
  const sendMessage = () => {
    if (!message) {
      return;
    }
    wsChanel?.send(message);
    setMessage("");
  };
  return (
    <div>
      <textarea
        onChange={(evt) => {
          setMessage(evt.currentTarget.value);
        }}
        value={message}
      ></textarea>
      <button disabled={ wsChanel == null || readyState !== true} onClick={sendMessage}>
        Send
      </button>
    </div>
  );
};
