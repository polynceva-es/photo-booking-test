import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './SharePopup.css';
import vk_logo_share from '../../images/icon_vk_share.svg';
import telegram_logo from '../../images/icon_telegram.svg';
import button_close from '../../images/icon_button_close.svg';

function sharePostInVk(url) {
  return `https://vk.com/share.php?url=${url}?title='Title'`; //Надо добавить заголовки в метаданные
}

function shareInTelegram(url) {
  return `https://telegram.me/share/url?url=${url}&text=ТЕКСТ`; //Надо добавить заголовки в метаданные
}

export const SharePopup = () => {
  const location = useLocation();
  const baseUrl = 'http://localhost:3000';
  return (
    <div className="sharePopup">
      <h1 className="sharePopup__title">Поделиться</h1>
      {/* добавить функцию onClick */}
      <button
        className="sharePopup__button sharePopup__button_close"
        onClick={() => {}}
      >
        <img
          src={button_close}
          alt="button_close"
        />
      </button>
      <h2 className="sharePopup__subtitle">Поделитесь профилем фотографа</h2>
      <div className="sharePopup__logo-container">
        <Link
          to={sharePostInVk(`${baseUrl}${location.pathname}`)}
          target="_blank"
          className="sharePopup__logo-link"
        >
          <img
            src={vk_logo_share}
            alt="vk logo"
            className="sharePopup__logo-image"
          />
        </Link>

        <Link
          to={shareInTelegram(`${baseUrl}${location.pathname}`)}
          target="_blank"
          className="sharePopup__logo-link"
        >
          <img
            src={telegram_logo}
            alt="telegram  logo"
            className="sharePopup__logo-image"
          />
        </Link>
      </div>
      <h2 className="sharePopup__subtitle">Или скопируйте ссылку</h2>
      <div className="sharePopup__copy">
        <p className="sharePopup__link sharePopup__subtitle">{`${baseUrl}${location.pathname}`}</p>
        {/* добавить функцию onClick */}
        <button
          className="sharePopup__button sharePopup__button_copy"
          onClick={() => {}}
        >
          Скопировать
        </button>
      </div>
    </div>
  );
};
