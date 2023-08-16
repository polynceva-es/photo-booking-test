import React from "react";
import "../components/SharePopup.css";

function SharePopup (props) {
  const {links} = props;
  return (
    <div className="sharePopup">
      <div>
        <h1>Поделиться</h1>
        <button>X</button>
      </div>
      <h2>Поделитесь профилем фотографа</h2>
      <div>
        {links}
      </div>
      <h2>Или скопируйте ссылку</h2>
      <div>
        <p>LinkLinkLink</p>
        <button>Скопировать</button>
      </div>
    </div>
  )
}

export default SharePopup;