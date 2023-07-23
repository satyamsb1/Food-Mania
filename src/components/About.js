import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props);

        // console.log("Parent Constructor");
    }
    componentDidMount(){
        // console.log("Parent componentDidMount");
    }
    render(){
        // console.log("Parent Render");
        return( 
            <div className="about">
                <h1>This is Class Component</h1>
                <h2>This is Namaste react</h2>
                <UserClass name = {"Satyam Borade"} location={"Nashik (Class)"}/>  
            </div>
        ) 
    }
}

// const About = () => {
//     return(
//         <div className="about">
//             <h1>This is about page</h1>
//             <UserClass name = {"Satyam Borade (Class)"} location={"Nashik (Class)"}/>
//         </div>
//     )
// };

export default About;