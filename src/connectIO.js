import React from 'react'
import { io } from "socket.io-client"

export default function connectIO(Component) {
    let socket = io("ws://localhost:8080")
    class Connect extends React.Component {
        render() {
            return <Component {...{socket}}/>
        }
    }
    Connect.displayName = `Connect(${getDisplayName(Component)})`
    return Connect;
}
function getDisplayName(WrapComponent) {
    return WrapComponent.displayName || WrapComponent.name || "Component";
}