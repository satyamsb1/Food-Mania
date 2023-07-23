import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy Data",
                location: "Default",
                
            }
        };
        console.log("Constructor");
    }
    async componentDidMount(){
        // api call here.
        const data = await fetch("https://api.github.com/users/satyamsb1")
        const json = await data.json();
        this.setState({
            userInfo: json,
        })
        console.log(json);
    }
    componentDidUpdate(prevProps, prevState){

        if(this.state.count!= prevState.count){ //This is how we used to mention dependencies in class components.
            //code
        }
        
        console.log("Component did update");
    };

    componentWillUnmount(){
        console.log("ComponentWillUnmount");
    }

    render(){
        const {name, location, login, avatar_url} = this.state.userInfo;
        console.log("Render");
        return(
            <div className="user-card">
                <img src={avatar_url} alt="Picture" />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: {login}</h4>
            </div>
        );
    }
}
export default UserClass;