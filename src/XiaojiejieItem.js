import React, { Component } from "react"; //imrc
import PropTypes from 'prop-types'
class XiaojiejieItem extends Component {
  //cc
  //--------------主要代码--------start
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  //--------------主要代码--------end
  render() {
    return <div onClick={this.handleClick}>{this.props.content}</div>;
  }
  handleClick() {
    this.props.deleteItem(this.props.index)
  }
}
XiaojiejieItem.propTypes={
    content:PropTypes.string,
    deleteItem:PropTypes.func,
    index:PropTypes.number
}
export default XiaojiejieItem;
