import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import { useState } from "react";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
    const [selectedCard, setSelectedCard] = useState({ isOpened: false })
    const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false)

    // Обработка картинки
    const handleCardClick = ({ link, name, isOpened }) => {
        setSelectedCard({ link, name, isOpened: !isOpened })
    }

    // Обработка open/close попапов
    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    }
    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    }
    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
    }
    const handleConfirmPopupClick = () => {
        setIsConfirmPopupOpen(!isConfirmPopupOpen);
    }

    const closeAllPopups = () => {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard({isOpened: false});
        setIsConfirmPopupOpen(false);
    }

    return (
        <div className="body">
            <div className="page">
                <Header />
                <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} onConfirmPopup={handleConfirmPopupClick} />
                <Footer />
            </div>

        <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} container="popup__container popup__form" onClose={closeAllPopups}>
            <input type="text" className="popup__input" name="input-name" id="input__popup-name" minLength="2" maxLength="40" placeholder="Имя" required />
            <span id="input__popup-name-error" className="popup__error" />
            <input type="text" className="popup__input" name="input-about" id="input__popup-about" minLength="2" maxLength="200" placeholder="Вид деятельности" required />
            <span id="input__popup-about-error" className="popup__error" />
        </PopupWithForm>

        <PopupWithForm name="add" title="Новое место" isOpen={isAddPlacePopupOpen} container="popup__container popup__form" onClose={closeAllPopups}>
            <input name="InputNameCard" type="text" id="input__popup-CardName" className="popup__input" placeholder="Название места" minLength="2" maxLength="40" required />
            <span id="input__popup-CardName-error" className="popup__error" />
            <input type="url" className="popup__input" name="InputImgCard" id="input__popup-CardImg" placeholder="Схсылка на картинку" required />
            <span id="input__popup-CardImg-error" className="popup__error" />
        </PopupWithForm>

        <PopupWithForm name="refresh" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} container="popup__container popup__form" onClose={closeAllPopups}>
            <input type="url" className="popup__input" name="avatar" id="input__popup-avatar" placeholder="Ссылка на аватар" required />
            <span id="input__popup-avatar-error" className="popup__error" />
        </PopupWithForm>

        <PopupWithForm name="sure" title="Вы уверены?" isOpen={isConfirmPopupOpen} container="popup__container popup__form" onClose={closeAllPopups}>
        </PopupWithForm>


        <ImagePopup onClose={closeAllPopups} card={selectedCard} />
        </div>
    );
}
export default App;