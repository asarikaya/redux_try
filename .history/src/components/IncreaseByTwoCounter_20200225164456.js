import React, { Component } from 'react'
import {increaseByTwoCounter} from "../redux/actions/counterActions"
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class IncreaseByTwoCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={e=>{
                    this.props.dispatch(IncreaseByTwoCounter());
                }}>
                    2 arttır
                </button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {actions:bindActionCreators(increaseByTwoCounter,dispatch)}
}

export default connect(mapDispatchToProps)(IncreaseByTwoCounter)
