import React from 'react'

export default function ListMsgItem({ msgItem }) {
    return (
        <div className="list-msg__message p-3 d-flex w-100 align-items-start">
            <img className="list-users__avatar me-3" src="./avatar/default.png" alt="user-avatar" />
            <div>
                <a href="/home" className="text-uppercase text-decoration-none">{msgItem.user}</a>
                <p>{msgItem.text}</p>
                <small className="text-muted">{new Date(msgItem.date).toLocaleString("ru")}</small>
            </div>
        </div>
    )
}
