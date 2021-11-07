import React from 'react'
import { io } from "socket.io-client"
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import chatReduce from './reducers/chat-reduce';

export default function connectIO(Component) {
    let socket = io("ws://192.168.1.82:8080")

    function Connect() {
        let store = createStore(chatReduce) 
        socket.on("getListMsg", (data) => {
            store.dispatch({
                type: "SET_MESSAGES", 
                payload: data
            })
        })
        socket.on("getUsers", (data) => {
            store.dispatch({
                type: "SET_USERS", 
                payload: data
            })
        })

        return (
            <Provider store={store}>
                <Component {...{socket}}/>
            </Provider>
        );
    }
    Connect.displayName = `Connect(${getDisplayName(Component)})`
    return Connect;
}
function getDisplayName(WrapComponent) {
    return WrapComponent.displayName || WrapComponent.name || "Component";
}