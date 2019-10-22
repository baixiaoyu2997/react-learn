import React from "react";
import ReactDOM from "react-dom";
import XiaojiejieItem from "./XiaojiejieItem";
import "./index.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["任务1", "任务2"],
      inputValue: ""
    };
    this.valueChange = this.valueChange.bind(this);
    this.addList = this.addList.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  render(h) {
    return (
      <React.Fragment>
        <label htmlFor="inputId">输入框</label>
        <input
          id="inputId"
          value={this.state.inputValue}
          onChange={this.valueChange}
          className="input"
        ></input>
        <button onClick={this.addList}>添加</button>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <XiaojiejieItem 
              key={index+item}  
              content={item}
              index={index}
              //关键代码-------------------start
              deleteItem={this.deleteItem.bind(this)}
              //关键代码-------------------end
              />
            )
          })}
        </ul>
      </React.Fragment>
    );
  }
  valueChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }
  addList(e) {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ""
    });
  }
  deleteItem(y) {
    let list = this.state.list;
    list.splice(y, 1);
    this.setState({
      list
    });
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
