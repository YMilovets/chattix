import React from 'react'

export default function ListMsg(props) {

    return (
        <div className="list-msg-items d-flex flex-column">
            {props.children}
        </div>
    )
}
