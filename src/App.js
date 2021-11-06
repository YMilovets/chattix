import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import connectIO from "./connectIO"
import React, {useState, useRef} from 'react'
import ListUsers from './components/listUsers';
import ListUserItem from './components/listUserItem';
import ListMsg from './components/listMsg';
import ListMsgItem from './components/listMsgItem';
import Nav from './components/nav';

function App({socket, ...props}) {
  const [store, setStore] = useState([]);
  const [users, setUsers] = useState([]);
  const msgField = useRef();

  socket.on("getListMsg", (data) => {
    setStore(data)
  })
  socket.on("getUsers", (data) => {
    setUsers(state => data)
  })
  
  socket.on("connect", () => {
    socket.emit("join");
  })

  const onSend = (e) => {
    e.preventDefault();
    socket.emit("send", {
      text: msgField.current.value.trim(),
      user: socket.id,
      date: Date.now()
    })
    msgField.current.value = "";   
  }
 
  return (
    <div className="App d-flex flex-column flex-grow-1">
      <Nav />
      <div className="m-3 d-flex flex-grow-1">
        <ListUsers>
          {users.map(elem => <ListUserItem key={elem.id} id={elem.id} />)}
        </ListUsers>
        <div className="list-msg w-100 ms-3 d-flex flex-column">
          <ListMsg>
            {store.map((elem, i) => <ListMsgItem key={i} msgItem={elem} />)}
          </ListMsg>
          <form onSubmit={onSend} className="form-send-msg input-group mt-3">
            <textarea ref={msgField} type="text" className="form-control" placeholder="Enter your message" />
            <button className="btn btn-primary" type="submit">Send</button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default connectIO(App);