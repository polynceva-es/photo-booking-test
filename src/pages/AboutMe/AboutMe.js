import { useNavigate } from "react-router-dom";
import "./AboutMe.css"

export const AboutMe = ()=> {
  const navigate = useNavigate();
  return(
    <>
    <button className="about-me__button" onClick={() => navigate(-1)}/>

    </>
  )
}