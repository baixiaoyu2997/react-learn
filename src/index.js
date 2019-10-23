import React from "react";
import ReactDOM from "react-dom";
import store from "./store";
import { Provider } from "react-redux";
import TodoFooter from "./components/TodoFooter";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";

class App extends React.Component {
  componentDidMount() {}
  render(h) {
    return (
      <Provider store={store}>
        <TodoHeader></TodoHeader>
        <TodoList></TodoList>
        <TodoFooter></TodoFooter>
      </Provider>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
