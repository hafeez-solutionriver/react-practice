import React from "react";
class CounterForRenderProps extends React.Component {
    
    render() { 
        const {count,handleInput} = this.props
        return (

            <button onClick={handleInput} > Click {count} Times</button>
        );
    }
}
 
export default CounterForRenderProps;