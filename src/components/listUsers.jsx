import React from 'react'

export default function ListUsers(props) {
    return (
        <div className="list-users-wrap flex-shrink-0 overflow-auto">
            <ul className="list-users list-group shadow-sm">
                {props.children}
            </ul>
        </div>
    )
}