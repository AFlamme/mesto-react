class Api {
    constructor(confing) {
        this._url = confing.url
        this._headers = confing.headers
    }

    _checkError(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    // Получение списка всех карточек
    getInitialCards() {
        return fetch(`${this._url}/cards`, {
                method: 'GET',
                headers: this._headers
            })
            .then(this._checkError);
    }


    // Получение информации пользователя
    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
                method: 'GET',
                headers: this._headers
            })
            .then(this._checkError);
    }

    // Обновление аватара 
    newAvatar(avatarUrl) {
        const newConfing = {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: avatarUrl['avatar']
            }),

        }
        return fetch(`${this._url}/users/me/avatar`, newConfing)
            .then(this._checkError);
    }

    // Удаление карточки
    removeCard(cardId) {
        const newConfing = {
            headers: this._headers,
            method: 'DELETE',
        }
        return fetch(`${this._url}/cards/${cardId}`, newConfing)
            .then(this._checkError);
    }

    // Лайк 
    putLike(cardId) {
        const newConfing = {
            headers: this._headers,
            method: 'PUT',
        }
        return fetch(`${this._url}/cards/likes/${cardId}`, newConfing)
            .then(this._checkError);
    }

    // Удалить лайк
    removeLike(cardId) {
        const newConfing = {
            headers: this._headers,
            method: 'DELETE',
        }
        return fetch(`${this._url}/cards/likes/${cardId}`, newConfing)
            .then(this._checkError);
    }

    // Отправить информацию 
    patchProfileInfo(data) {
        const newConfing = {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data['input-name'],
                about: data['input-about']
            }),
        }
        return fetch(`${this._url}/users/me`, newConfing)
            .then(this._checkError);
    }

    // Отправить информацию о пользователе на сервер
    patchCard(data) {
        const newConfing = {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data['InputNameCard'],
                link: data['InputImgCard']
            }),

        }
        return fetch(`${this._url}/cards`, newConfing)
            .then(this._checkError);
    }
}

export default new Api({
    url: `https://mesto.nomoreparties.co/v1/cohort-43/`,
    headers: {
        authorization: '292cceda-e820-4d58-9be5-30225e20d80b',
        'Content-Type': 'application/json'
    }
});