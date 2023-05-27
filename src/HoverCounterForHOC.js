import React from 'react'
import EnhancedComponent from './withCounter'
class HoverCounterForHOC extends React.Component {
    
    
    render() { 
        const {count,handleInput} = this.props
        return (

            <button onMouseOver={handleInput} >  Hover {count} Times</button>
        );
    }
}
 
export default EnhancedComponent(HoverCounterForHOC)
