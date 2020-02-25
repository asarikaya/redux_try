import React, { Component } from 'react'
import {increaseByTwoCounter} from "../redux/actions/counterActions"
import {bindActionCreators} from "redux"
import {connect} from "react-redux"

class IncreaseByTwoCounter extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {actions:bindActionCreators(increaseByTwoCounter,dispatch)}
}

export default connect(mapDispatchToProps)(IncreaseByTwoCounter)
