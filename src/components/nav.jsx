import React, {useState} from 'react'
import Dropdown from './dropdown';

export default function Nav() {
    const [active, setActive] = useState(false);
    const onShow = () => {
        setActive(!active);
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
            <div className="navbar-brand" href="#">Chattix</div>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <div onClick={onShow} className="nav-link dropdown-toggle">
                            Настройка
                        </div>
                        <Dropdown className={active && "show"} >
                            <div className="dropdown-item" href="#">Сменить имя пользователя</div>
                            <div className="dropdown-item" href="#">Выйти</div>
                        </Dropdown>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
