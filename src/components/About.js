import User from "./User";
import UserClass from "./UserClass";
const About = () => {
    return(
        <div className="about">
            <h1>This is about page</h1>
            <UserClass name = {"Satyam Borade (Class)"} location={"Nashik (Class)"}/>
        </div>
    )
};

export default About;