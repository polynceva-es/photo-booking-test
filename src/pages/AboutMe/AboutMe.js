import { useNavigate } from "react-router-dom";
import "./AboutMe.css";

export const AboutMe = () => {
  const navigate = useNavigate();
  return (
    <article className="about-me">
      <button className="about-me__button" onClick={() => navigate(-1)} />
      <div
        className="
          about-me__container
          about-me__container_row
          about-me__container_aling_spbet"
      >
        <div
          className="
            about-me__container
            about-me__container_column
            about-me__container_small"
        >
          <div
            className="
              about-me__container
              about-me__container_row
              about-me__container_aling_start"
          >
            <h1 className="about-me__title">Алена Коновалова</h1>
            <span>foto</span>
            <span>video</span>
            <span>reiting</span>
          </div>
          <p className="about-me__subtitle">Москва</p>
          <div className="about-me__info">
            <h2 className="about-me__subtitle">Обо мне</h2>
            <p className="about-me__text">
              Меня зовут Алена и я профессионально снимаю фото и видео🤍 Буду
              рада познакомиться лично!               Canon EOS 90D Body, объектив Canon EF 50mm f/1.8 STM, фотовспышка
              Canon Speedlite 430EX III-RT, свет Raylab Axio III 400 Basic Kit               Canon EOS 90D Body, объектив Canon EF 50mm f/1.8 STM, фотовспышка
              Canon Speedlite 430EX III-RT, свет Raylab Axio III 400 Basic Kit
            </p>
          </div>
          <div className="about-me__info">
            <h2 className="about-me__subtitle">Оборудование</h2>
            <p className="about-me__text">
              Canon EOS 90D Body, объектив Canon EF 50mm f/1.8 STM, фотовспышка
              Canon Speedlite 430EX III-RT, свет Raylab Axio III 400 Basic Kit
              Canon EOS 90D Body, объектив Canon EF 50mm f/1.8 STM, фотовспышка
              Canon Speedlite 430EX III-RT, свет Raylab Axio III 400 Basic Kit
              Canon EOS 90D Body, объектив Canon EF 50mm f/1.8 STM, фотовспышка
              Canon Speedlite 430EX III-RT, свет Raylab Axio III 400 Basic Kit
            </p>
          </div>
          <div
            className="
            about-me__container
            about-me__container_row
            about-me__container_aling_start"
          >
            <button className="about-me__button-contact">Написать</button>
            <button className="about-me__button-contact">Показать контакты</button>
            <button className="about-me__button-contact"></button>
          </div>
        </div>
        <figure className="about-me__avatar">
          <img src="" className="about-me__avatar-image" alt="" />
        </figure>
      </div>
    </article>
  );
};
