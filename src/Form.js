import React from "react";

export default class Form extends React.Component{


    handleEmail = (event)=>{

        
        this.setState({
            email:event.target.value
        })
    }

    
    handlePassword = (event)=>{

        this.setState({
            password:event.target.value
        })
    }
    handleProgrammingLanguage = (event)=>{
        this.setState({
            programmingLanguage:event.target.value
        })
    }
    constructor(props)
    {
        super(props)
        this.state={
            email:'',
            password:'',
            programmingLanguage:'Java'
        }
    }
    render()
    {
        return (

            <form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder="Enter email"
      value={this.state.email}
      onChange={this.handleEmail}
    />
 
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
      placeholder="Password"
      value={this.state.password}
      onChange={this.handlePassword}
    />
  </div>
  
  <button type="submit" className="btn btn-primary mb-5 mt-2" onClick={()=>{
    alert(this.state.email+this.state.password+this.state.programmingLanguage)
  }}>
    Submit
  </button>

  <select value={this.state.programmingLanguage} onChange={this.handleProgrammingLanguage}>
    <option value="Java">Java</option>
    <option value="C#">C#</option>
    <option value="Python">Python</option>
  </select>

  <label>{JSON.stringify()}</label>

 
    <input type="radio" name="gender"  value="Male" />Male
        
    
    <input type="radio" name="gender" value="Female"/>Female
    
   
 
</form>


        )
        
    }
}