import React, {useState} from 'react'

export default function Nav() {
    const [active, setActive] = useState(false);
    const onShow = () => {
        setActive(!active);
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
            <a className="navbar-brand" href="#">ChaTTers</a>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                <a onClick={onShow} class="nav-link dropdown-toggle" href="#">
                    Настройка
                </a>
                <div class={`dropdown-menu ${active && "show"}`}>
                    <a class="dropdown-item" href="#">Сменить имя пользователя</a>
                    <a class="dropdown-item" href="#">Выйти</a>
                </div>
                </li>
            </ul>
            </div>
        </nav>
    )
}
