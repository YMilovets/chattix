import React from 'react'

export default function ListMsg(props) {

    return (
        <div className="list-msg-items overflow-auto d-flex flex-column flex-grow-1">
            <div>
                {props.children}
            </div>
        </div>
    )
}
