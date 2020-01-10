import React,{ Component }  from 'react';
import Counter from './Counter'
class ControlPanel extends Component {
    constructor(props){
        super(props);
        this.state={count:0}
        this.statePlus=this.statePlus.bind(this)
    }
    statePlus(value){
        this.setState({
            count:this.state.count+value
        })
    }
    render(){
        return (
            <div>
                <Counter onPlus={this.statePlus} num="1"></Counter>
                <Counter onPlus={this.statePlus} num="2"></Counter>
                <Counter onPlus={this.statePlus} num="3"></Counter>
                <hr style={{height:'1px',background:'blue',width:'100%'}}/>
                <div>total count:{this.state.count}</div>
            </div>
        )
    }
}
export default ControlPanel;