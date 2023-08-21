import { useNavigate } from 'react-router-dom';
import './Preview.css';

export const Preview = props => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/card/${props.id}`, { state: { name: props.name, id: props.id } })}
      className={'preview-container'}
    >
      <div>Страница фотографа {props.id}</div>
      <div>{props.name}</div>
    </div>
  );
};
