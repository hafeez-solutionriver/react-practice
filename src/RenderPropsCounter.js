import React from 'react';

class RenderPropsCounter extends React.Component {

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
            return (

                <div>
            {this.props.render(this.state.count,this.handleInput)}
            </div>
            );
        }
    }
   
export default RenderPropsCounter

