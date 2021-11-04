import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import connectIO from "./connectIO"

function App(props) {
  const { socket } = props;
  socket.on("connect", () => {
    socket.emit("start")
  });
  return (
    <div className="App m-3 d-flex">
      <ul className="list-users list-group flex-shrink-0">
        <li className="list-group-item list-users__item d-flex w-10 justify-content-between">
          <img className="list-users__avatar" src="/" alt="user-avatar" />
          <h5>Anonimus</h5>
        </li>
        <li className="list-group-item list-users__item d-flex w-10 justify-content-between">
          <img className="list-users__avatar" src="/" alt="user-avatar" />
          <h5>Anonimus</h5>
        </li>
      </ul>
      <div className="list-msg h-100 w-100 ms-3">
        <div className="list-msg-items d-flex">
          <div className="list-msg__message w-100">
            <img className="list-users__avatar" src="/" alt="user-avatar" />
            <p>Message</p>
          </div>
        </div>
        <form className="form-send-msg input-group">
          <textarea type="text" className="form-control" placeholder="Enter your message" />
          <button className="btn btn-primary" type="button">Send</button>
        </form>
      </div>
    </div>
  );
}

export default connectIO(App);