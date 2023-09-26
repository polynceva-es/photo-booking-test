import { useEffect, useState } from "react";
import {Message} from "../../components/Message/Message";
//поле с сообщениями
export const Messages = (props) => {
  const {wsChanel} = props;
  const [messages, setMessages] = useState([]);

  useEffect(()=> {
    const onMessage = (evt) => {
      // let newMessages = JSON.parse(evt.data);
      let newMessage = { author: evt.data, text: evt.data };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };
    wsChanel?.addEventListener("message", onMessage);
    return ()=> {
      console.log("removeEventListener message")
      wsChanel?.removeEventListener("message", onMessage)
    }
  }, [wsChanel])
  return (
    <div style={{ height: "400px", overflow: "auto" }}>
      {messages.map((message, i) => {
        return <Message key={i} message={message} />;
      })}
    </div>
  );
};