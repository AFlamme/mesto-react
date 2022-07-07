const Card = ({ card, onCardClick, onConfirmPopup }) => {
    const handleClick = () => {
        onCardClick(card);
    }
    
    return (
        <li className="card">
            <button onClick={onConfirmPopup} type="button" className="card__delete"></button> 
            <img className="card__photo" src={card.link} alt={card.name} onClick={handleClick}/> 
                <div className="card__info">
                    <h2 className="card__title">{card.name}</h2> 
                        <div className="card__like-cont">
                            <button type="button" className="card__like"></button> 
                            <span className="card__likes-container">{card.likes.lenght}</span>
                        </div>
                </div> 
        </li>
    )
}
export default Card