import React from 'react'

export default function ListUserItem({nickname}) {
    return (
        <li className="list-group-item list-users__item d-flex">
            <img className="list-users__avatar me-3" src="./avatar/default.png" alt="user-avatar" />
            <div>
                <p>{nickname}</p>
                <small className="text-muted">В сети</small>
            </div>
        </li>
    )
}
