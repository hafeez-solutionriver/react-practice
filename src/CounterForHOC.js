import React from 'react'
import EnhancedComponent from './withCounter'
class CounterForHOC extends React.Component {
    
    
    render() { 
        const {count,handleInput} = this.props
        return (

            <button onClick={handleInput} > Click {count} Times</button>
        );
    }
}
 
export default EnhancedComponent(CounterForHOC)
