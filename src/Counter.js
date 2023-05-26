import React from 'react'
import PropTypes from 'prop-types';
export default class Counter extends React.Component{

  
    constructor(props)
    {
      
        super(props)
       
        this.state={
            count:0
        }
        this.increment=this.increment.bind(this)
        this.decrement=this.decrement.bind(this)

    }
    increment() {
        this.setState(prevStatus=>({count:prevStatus.count+1}))
      }
    
      decrement() {
        this.setState(prevStatus=>({count:prevStatus.count-1}))
      }
    
    render(){
        return (


<div className="btn-group d-flex justify-content-center " role="group" aria-label="Basic example">
  <button type="button" className="btn btn-secondary" onClick={this.decrement.bind(this)}>
    -
  </button>
  <button type="button" className="btn btn-secondary">
  {this.props.name} {this.state.count} 
  </button>
  <button type="button" className="btn btn-secondary" onClick={this.increment}>
    +
  </button>
</div>

        )
    }
}

Counter.propTypes={
  name:PropTypes.string
};



