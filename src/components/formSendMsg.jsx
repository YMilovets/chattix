import React, { useRef } from 'react'
import { useSelector } from 'react-redux';

export default function FormSendMsg({socket}) {
    const msgField = useRef();
    const users = useSelector(state => state.listUsers)

    const onSend = (e) => {
        e.preventDefault();
        let client = users.find(elem => elem.id === socket.id);
        socket.emit("send", {
            text: msgField.current.value.trim(),
            user: client.nickname,
            date: Date.now()
        })
        msgField.current.value = "";   
    }
    return (
        <form onSubmit={onSend} className="form-send-msg input-group mt-3">
            <textarea ref={msgField} type="text" className="form-control" placeholder="Enter your message" />
            <button className="btn btn-primary" type="submit">Send</button>
        </form>
    )
}
