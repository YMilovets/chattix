import React, { useRef } from 'react'

export default function FormSignInChat({socket, setIsAuth}) {
    const validateName = (name) => {
        return name.trim().length > 0;
    }
    const onSendName = (e) => {
        e.preventDefault();
        const name = nickname.current.value.trim();
        if (validateName(name)) {
            socket.emit("join", name);
            setIsAuth(true);
        }
        else {
            nickname.current.classList.add("is-invalid");
            nickname.current.value = "";
        }
    }
    const onChangeName = () => {
        nickname.current.classList.remove("is-invalid");
    }
    const nickname = useRef();

    return (
        <div className="d-flex flex-grow-1 justify-content-center align-items-center auth-content">
            <form onSubmit={onSendName} className="p-4 rounded bg-white">
                <div className="form-group mb-2">
                    <label htmlFor="nicknameData">Имя пользователя</label>
                    <input ref={nickname} onChange={onChangeName} id="nicknameData" type="text" className="form-control" placeholder="Введите своё имя в чате" />
                    <div className="invalid-feedback">
                        Имя пользователя не может быть пустым
                    </div>
                </div>
                <div className="form-group form-check mb-3">
                    <input id="saveData" type="checkbox" className="form-check-input" />
                    <label htmlFor="saveData">Запомнить меня</label>
                </div>
                <button type="submit" className="btn btn-primary">Войти в чат</button>
            </form>
        </div>
    )
}
