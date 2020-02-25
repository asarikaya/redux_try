import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import increaseCounter from "../redux/actions/counterActions"

class IncreaseCounter extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {action:bindActionCreators(increaseCounter,dispatch)}
}

