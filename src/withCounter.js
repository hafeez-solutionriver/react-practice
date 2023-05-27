import React from "react";

const EnhancedComponent = OriginalComponent=>{

    class NewComponent extends React.Component {

    constructor(props)
    {
        super(props);

        this.state = { 
            count:0
         } 
    }
    

     handleInput = ()=>{
        this.setState(prevState=>{
            return {count:prevState.count+1}
        })
     }
        render() { 
            return (<OriginalComponent count={this.state.count} handleInput={this.handleInput}/>);
        }
    }
    return NewComponent
}
export default EnhancedComponent;

