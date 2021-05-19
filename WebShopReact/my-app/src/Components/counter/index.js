import React, { Component } from 'react'
import { connect } from 'react-redux'


export class CounterPage extends Component {
    render() {
        const { counter } = this.props;
        return (
            <div>
                <h1>Counter page</h1>
                <p>Redux value: {{counter}}</p>
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