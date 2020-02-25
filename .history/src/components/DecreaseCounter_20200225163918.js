import React, { Component } from 'react'
import {decreaseCounter} from "../redux/actions/counterActions"

export default class DecreaseCounter extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {actions:bindActionCreators(decreaseCounter,dispatch)}
}

export default connect(mapDispatchToProps)(DecreaseCounter)
