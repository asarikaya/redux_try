import React, { Component } from 'react'

export default class DecreaseCounter extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {actions:bindActionCreators(increaseCounter,dispatch)}
}

export default connect(mapDispatchToProps)(IncreaseCounter)
