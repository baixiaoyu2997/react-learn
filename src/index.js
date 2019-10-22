import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";
import { createStore } from 'redux'
const store = createStore();
class App extends React.Component {
  componentDidMount(){
   
  }
  render(h) {
    return (
      <React.Fragment>
       <Counter></Counter>
      </React.Fragment>
    );
  }
}
ReactDOM.render(<App/>, document.getElementById("root"));
