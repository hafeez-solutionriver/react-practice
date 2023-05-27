import React from "react";
import ComponentB from "./ComponentB";
import { UserProvider } from "./userContext";
export default class ComponentA extends React.Component {
    
    render() { 
        return (
        
        <>
        <UserProvider value="Hafeez">
        <ComponentB/>
        </UserProvider>
        </>
        );
    }
}
 

