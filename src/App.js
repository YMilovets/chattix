import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import connectIO from "./connectIO"
import React from 'react'
import Nav from './components/nav';
import Content from './components/content';

function App({socket, ...props}) {
  return (
    <div className="App d-flex flex-column">
      <Nav />
      <Content {...{socket}}/>
    </div>
  );
}

export default connectIO(App);