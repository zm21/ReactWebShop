import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as types from './types'

export class CounterPage extends Component {

    buttonClickIncrement = () => {
        console.log("====button click====")
        this.props.dispatch({type: types.COUNTER_INCREMENT});
    } 
    buttonClicDecrement = () => {
        console.log("====button click====")
        this.props.dispatch({type: types.COUNTER_DECREMENT});
    }

    render() {
        const { counter } = this.props;
        return (
            <div>
                <h1>Counter page</h1>
                <p>Redux value: {counter}</p>
                <button className="button" onClick={this.buttonClickIncrement}>Increment</button>
                <button className="button" onClick={this.buttonClicDecrement}>Decrement</button>

                
            </div>
        )
    }
}
const mapState = (stateRedux) =>{
    return {
        counter: stateRedux.counter.data
    };
}

export default connect(mapState)(CounterPage)