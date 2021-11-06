import React from 'react'

export default function ListUserItem({id}) {
    return (
        <li className="list-group-item list-users__item d-flex w-10 justify-content-between">
            <img className="list-users__avatar me-3" src="./avatar/default.png" alt="user-avatar" />
            <div>
                <p>{id}</p>
                <small className="text-muted">В сети</small>
            </div>
        </li>
    )
}
