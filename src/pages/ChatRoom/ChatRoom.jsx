import React, { useState, useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Messages } from "../../components/Messages/Messages";
import { AddMessageForm } from "../../components/AddMessageForm/AddMessageForm";

import "./ChatRoom.css";

export const ChatRoom = () => {
  const navigate = useNavigate();
  const name = "Name";

  const [wsChanel, setWsChanel] = useState(null);

  useEffect(() => {
    let ws;
    const onClose = () => {
      console.log("close webSocket");
      setTimeout(createChanel, 3000);
    };
    const createChanel = () => {
      ws?.removeEventListener("close", onClose);
      ws?.close();
      ws = new WebSocket("ws://echo.websocket.events/");
      ws?.addEventListener("close", onClose);
      setWsChanel(ws);
    };

    createChanel();

    return () => {
      ws.removeEventListener("close", onClose);
      ws.close();
    };
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
        <Messages wsChanel={wsChanel} />
        <AddMessageForm wsChanel={wsChanel} />
      </div>
    </>
  );
};
