import React,{Component} from 'react'
class Counter extends Component{
    constructor(props){
        super(props)
        this.state={count:0,num:props.num}
    }
    updateCount(value){
        this.setState({
            count:this.state.count+value
        })
        this.props.onPlus(value)
    }
    render(){
        return (
            <div>
                <button onClick={()=>this.updateCount(1)}>+</button>
                <button onClick={()=>this.updateCount(-1)}>-</button>
        第{this.state.num}个计数器：{this.state.count}
            </div>
        )
    }
}
export default Counter