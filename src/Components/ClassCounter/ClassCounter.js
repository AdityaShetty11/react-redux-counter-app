import  {Component} from 'react';
import {connect} from 'react-redux';

class ClassCounter extends Component{

    onDecrementHandler(){
        this.props.decrementDispatch();
    };
    onIncrementHandler(){
        this.props.incrementDispatch();
    };

    render(){
        return(
            <>
            <h1>React Redux Counter (Class Component)</h1>
            <div>{this.props.counterValue}</div>
            <button onClick={this.onDecrementHandler.bind(this)}>-</button>
            <button onClick={this.onIncrementHandler.bind(this)}>+</button>
            </>
        )
    }
};

const mapStateToProps = state =>{
    return {counterValue: state.counter}
};

const mapDispatchToProps = dispatch =>{
 return{ 
     decrementDispatch  : ()=>{dispatch({type:'decrement'})},
     incrementDispatch : ()=>{dispatch({type:'increment'})}
}
}

export default connect(mapStateToProps,mapDispatchToProps)(ClassCounter);