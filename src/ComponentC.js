import React from "react";
import { UserConsumer } from "./userContext";
export default class ComponentC extends React.Component {
    
    render() { 
        
        return (
            <>
        <UserConsumer>
            {
                (name)=>{
        return <h1> Hi {name}</h1>
                }
            }
        
        </UserConsumer>
        </>);
    }
}
 

