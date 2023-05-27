import React from 'react'

export default class HoverCounterForRenderProps extends React.Component {
    
    
    render() { 
        const {count,handleInput} = this.props
        return (

            <button onMouseOver={handleInput} >  Hover {count} Times</button>
        );
    }
}