import React from "react";
import "../components/SharePopup.css";

function SharePopup (props) {
  const {url, links} = props;
  return (
    <div className="sharePopup">
      <div className="sharePopup__title">
        <h1>Поделиться</h1>
        <button>X</button>
      </div>
      <h2>Поделитесь профилем фотографа</h2>
      <div>
        {links}
      </div>
      <h2>Или скопируйте ссылку</h2>
      <div className="sharePopup__copy">
        <p>{url}</p>
        <button>Скопировать</button>
      </div>
    </div>
  )
}

export default SharePopup;