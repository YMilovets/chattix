import React from 'react'

export default function ListUsers(props) {
    return (
        <ul className="list-users list-group flex-shrink-0">
            {props.children}
        </ul>
    )
}
