import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import increaseCounter from "../redux/actions/counterActions"
import { connect } from 'react-redux'

class IncreaseCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={e=>{
                    
                }}>
                    1 arttır
                </button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    
}

export default connect(mapDispatchToProps)(IncreaseCounter)

