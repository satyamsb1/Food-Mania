import React from "react";
import ReactDOM from "react-dom";

const Title= () => (
    <h1 id="heading">
        This is the jsx heading Title
    </h1>
);

const HeadingComponent = () =>(
    <div className="container">
        <Title/>    
        <h1>This is a react functional Component</h1>
    </div>
);
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
/*
Component can also be written like this;
1. const HeadingComponent = () => <h1>This is a react functional Component</h1>;  
2. const HeadingComponent = () => (
    <h1>This is a react functional Component</h1>;  
);
 */