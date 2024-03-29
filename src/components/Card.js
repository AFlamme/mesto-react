import CurrentUserContext from "../contexts/CurrentUserContext";
import { useContext } from "react";

const Card = ({ card, onCardClick, onCardLike, onCardDelete}) => {
  const currentUser = useContext(CurrentUserContext)
  const handleClick = () => {onCardClick(card)}
  const handleLikeClick = () => {onCardLike(card)}
  const handleCardDelete = () => {onCardDelete(card)}

  // Проверка своей карточки
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id)

  // Переменная, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = (`card__delete ${isOwn ? 'card__delete_my' : ''}`);    
  // Переменная, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = (`card__like ${isLiked ? 'card__like_active' : ''}`);   

  return(
    <li className="card">
      <button onClick={handleCardDelete}  className={cardDeleteButtonClassName} type="button"></button>
      <img className="card__photo" src={card.link} alt={card.name} onClick={handleClick} />
      <div className="card__info">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-cont">
          <button onClick={handleLikeClick} className={cardLikeButtonClassName} type="button"></button>
          <span className="card__likes-container">{card.likes.length} </span>
        </div>
      </div>
    </li>
  )
}

export default Card