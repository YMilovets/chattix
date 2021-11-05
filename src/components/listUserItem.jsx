import React from 'react'

export default function ListUserItem() {
    return (
        <li className="list-group-item list-users__item d-flex w-10 justify-content-between">
            <img className="list-users__avatar" src="./avatar/default.png" alt="user-avatar" />
            <h5>Anonimus</h5>
        </li>
    )
}
