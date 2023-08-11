#Day-2 Igniting out app - Things that work behind the scene and we dont know what happens - Things tha happen when we use create react app. - React cannot on individual level make our application fast; we need many packages to achive
that speed.

    - Intro to npm;
    	- packages and dependencies are same.
    - Bundler:-
    	- Minification, Dependency Management, Optimization etc;
    	- We are going to use parcel
    	- We make production ready app using bundler.
    	- npm i -D parcel this is known as dev dependencies and used for development purposes.
    	- npm i parcel these are used in production also.
    		#Parcel (https://parceljs.org/)
    			- Dev Build
    			- Local Server
    			- HMR = Hot module Replacement
    			- File Watching Algorith which is written in C++
    			- Caching - For faster Builds
    			- Image Optimization
    			- Minification
    			- Bundling
    			- Compress
    			- Consistent Hashing
    			- Code splitting
    			- Differential Bundling -  for older versions of browsers
    			- Diagnostics
    			- Error Handling
    			- Tree shaking (Remove unused code)
    			- Different dev and prod bundles
    	- BrowsersList - Used to tell browsers which verisions app will run on
    		- Offical Website (https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z)

#Day3 - Laying the foundation - JSX - JSX is not html in js JSX is diffrent from the html. - You can call it has html-like or xml-like syntax - const jsxHeading = <h1 id="heading">This is the jsx heading</h1> this is an react element this also forms a
javascript object; - JSX makes easy to create and read the code - JS engine only understands the ecma(es6) script, Engine wont be able to read jsx (This is not valid pure js) - Here, parcel helps us again. The code is first transpiled(converted to the code browsers can understand) before it goes to the js engine. - Parcel dont do this transpilation process on its own it takes help from "BABEL". - Babel is a package it is bought into the project when we install parcel; - JSX --> React code is done by babel. - First the JSX is converted to the React.createElement, then this element is converted to the JS object and then rendered on to the browser as html element. - Babel also transpiles the new code to the older versions of the code so the browsers who support older versions of JS can understand. - In jsx to give a class then we have to use className="XYZ" not class="XYZ". - Names of Attibutes in jsx must be camel-cased. - If we have to write jsx in multipl lines we have to wrap the code in paranthesis, Altought it is not necessary
to use brackets if the code is written in single line. - React Component - Everything in react is Component. - Two types of components 1. Class based components (old way) uses JS classes 2. Functional components (new way) Uses JS functions
-\*- Functional components - Functional compoenent is nothing but a javascript function. - Name should start from a capital letter. - Functional component is nothing but a js function which returns a jsx element i.e. an react element. - Multiple ways to write a functional compoenent 1. const HeadingComponent = () =>{
return <h1>This is a react functional Component</h1>;
}; 2. const HeadingComponent = () => <h1>This is a react functional Component</h1>;  
 3. const HeadingComponent = () => (
<h1>This is a react functional Component</h1>;  
 ); - Component compostion is the process of using a component inside another component. - In jsx if we use {We can code any javascript inside} angular brackets.
#Day4 - Talk is cheap, show me the code - Building a food delivery app using react - Component our app will have - Header - logo - Nav-items - Body - Search - Restaurant container - RestaurantCard
Footer - Copyright - Links - Address - Contact - Props - Props are just normal arguments for the component/function. - Config Driven UI - When you build real a world application so you want should your website work in many country or many place we control our fontend it is known as using Config-Driven UI - Conclusion
build the reusable restaurantcard component
Intro to Swiggy API

#Day5 - Lets get hooked
-Export and imports - Default export
export default component
import Component from "path"; - Named export/imports
export const component;
import {Component} from "path"; - React Hooks - Normal JS function, These functions have diff superpowers. - Two most used Hooks - useState(); Superpowerful state variables in react - useEffect(); - Whenever the state variable updates, react rerenders that particular component; - this is performed with the help of DOM manipulation which is one of the core feature of react

    	- Reconciliation Algorithm (React Fiber)
    		- Virtual DOM is a representation of actual DOM. i.e. React elements
    	- Diff Algorithm
    		- Finds out difference between two virtual dom i.e. Old one and the new one.
    		- And then those UI changes are updated
    		- react has virtual DOM and Does efficient DOM manipulation. Thats why React is fast.

#Day6 - Exploring the world. - Monolithic architecture - A monolithic architecture refers to a software application design where all the components and features of the application are tightly integrated and deployed as a single, indivisible unit. - Microservices architecture - Microservices architecture is an architectural style that structures an application as a collection of small, loosely coupled, and independently deployable services. - These Microservices can used diff tech stack for diff types of services. - Services are independent of each other but are loosely coupled. - API Calling - Loading the page -> Rendering the page -> Making API call -> Again Rendering. - useEffect() hook - 2 arguments - Arrow function which is call back function. - Dependency Array. - First react will render the compoenent and then it will call the callback function from the useEffect hook. - Thats why we fetch Our data inside useEffect hook.

    - Conditional rendering
    	- Rendering of the page on the basis of a condition is known as conditional rendering.

    - If a useState() hook is a constant variable how does it get updated?
    	- const [btnName, setBtnName] = useState("Login");
    	when we use setBtnName the component is re rendered and this time the btnName is a new variable with the updated value, Thats why although the useState() hook is a constant variable the value can be changed.

    - Search Function
    	- Create a new local state variable first and then bind it to the input-box.
    	- As soon as the input changes we'll have to update the state variable.
    	- We will use onchange handler
    		onChange((e)=>{
    			setSearchText(e.target.value);
    		})
    	- With every charachter we type in the input the compoenent is re-rendered. As the state variable is updated with every input we type.
    	i.e react triggers a Reconciliation cycle per every input.

    	- We use multiple state variables to keep the data as when we filter out the searched data and search again we search within previously filtered data to avoid this we keep filtering from the original state variable which is not yet filtered.

#Day7 - Finding the path - useEffect() - If we do not specify the dependency array useEffect is called at initial component render only(just once). - If there is no dependency array, useEffect is called at every component render. - When we mention something in the dependency array it only changes when the dependency changes. - useState() - Never use useState() outside functional components. - Never use it in if else condition. - Never use it in for loops and functions. - This rules apply for all state variables. - - Routing in React app. - Install react router
npm i react-router-dom - To create a routing configuration we have to import { createBrowserRouter } from "react-router-dom"; - What is routing configuration - Specification of what will happen on a specific route - Config
const appRouter = createBrowserRouter([
{
path: "/about",
element: <About/>,
},])

    	- After specifying the configuration we have to import another component from "react-router-dom" called RouterProvider.
    	- We pass this appRouter in root.render with the help of RouterProvider. Where the appRouter is passed as an arguments
    		root.render(<RouterProvider router={appRouter}/>);

    	- useRouteError()
    		- this is the hook which is provided by react-router-dom to us.
    		- This hook provide us with an error description.
    				const err = useRouteError();

    	- Outlet
    		We use this Component to load the children component while routing in the app.

    	- Problem with the anchor tags
    		- The anchor tags reloads entire page when it is clicked.
    		- Disrupts the user experience and can result in a slower page load time.
    		- As react is used to create  Single page applications, this needs to be avoided.

    		- To counter this problem react-router-dom provides us with an incredicle component which is <Link>.
    		- Link component works exactly the same as the anchor tag.
    		- Syntax is <Link to="/contact">Contact us</Link>
    		- Link just refreshes the component

    	- Two types of Routing
    		- Client side routing
    			No network call is made, all the components are already loaded in the app.
    		- Server side routing
    			Network call is made and the component is fetched from the server.

    	- Single page applications(SPA)
    		- This is implemented via client side routing.
    		- React Router allows developers to define different routes within the application and renders the appropriate components based on the current URL, without triggering a full page reload.

#Day8 - Let's get Classy. - Class Based Components - Just like an functional component is an function which returns a peice of JSX, Class based components are the classes which renders piece of JSX code. - These are less maintainable, have more and messy code. - they are no longer used. - Now a days we can do almost Everything with the help of funtional compoenent. - Syntax of the class based Component
class ComponentName extends React.Component{
render(){
return (
JSX goes here
)
}
} - React.Component is a property of react.

    - Props in class based components
    	- Props are passed in a same way as they are passed in functinal components, But the method of using it deffers.
    	- We have to use the constructor of the class for the same purpose.
    		constructor(props){
    			super(props);
    		}
    		this code goes into the class component.

    		while using this props we have to use the this key world
    			for eg. {this.props.name}
    	- What is super(props)



    	- How do we create state varibales
    		this.state = { //This code goes into the constructor of component.
    			count: 0,
    		};
    		<h1>Count: {this.state.count}</h1>

    	- Never update the state variable directly.
    	- React has provided us with an important function this.setState({}). This can be used anywhere inside the class to update the value of state variables.

    	- React Class based component lifeCycle
    		- Constructor -> render() -> componentDidMount()

    	- Async
    		- While fetching api data which can be pretty time consuming, We dont want out code to wait for the data to be fetched. Instead while the data is being processed the other tasks could get execute.

    	- In class based components the api call is made in compoenentDidMount(), Just like we use useEffect in functional components.

    	- React lifeCycle
    		- Link https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
    		- First the constructor will be called and then the render will be called after the DOM updation the compoenentDidMount() is called.
    		-If we use this analogy if there are multiple class components first react will patch the render method of all the components and then go it will call for the compoenentDidMount() method. this is the optimisation done by react.
    		- updation of the dom is an expensive task, Thats why react patches it up together.

    			- parent constructor
    			- parent render
    				- first child constructor
    				- first child render
    				- second child constructor
    				- second child render

    				  - <DOM manipulation happens here>
    				- first child componentDidMount
    				- second child componentDidMount
    			- parent componentDidMount

    		- Api fetching in Class components
    			- Carried out in componentDidMount
    			- State variables are created with the default values and can be updated using this.setState({});
    			- First react will render the state variables with the default values during the render phase.
    			- React updated the dom with some dummy data or default values of the state variables.
    			- Now the componentDidMount is called and the api call is made.
    			- With the setState() inside the componentDidMount method the upadtion (reconciliation) processure begins.
    			- The state varibles are updated, then the render function is rendered once again. The state has been updated with new values.
    			- React after the execution of the render function, the dom is updated again.
    			- componentDidUpdate is called after the render process.
    			- constructor -> render -> compoenentDidMount -> render -> componentDidUpdate

    			- componentWillUnmount will be called when we take out the data or change the page, if we leave the page.

    			- If we donot specify the dependency array in useEffect the useEffect will be called everytime the component is rendered.
    			- In class component componentDidMount is only called once later componentDidUpdate is called everytime there is any change. Hence useEffect is not same as componentDidMount.


    			- If there is a setInterval in out compoenentDidMount, when we leave the page it is still working in the background which results in performance loss, that's why we use compoenentWillUnmount for the cleaning process.


    		-- Unmounting phase in useEffect;
    			useEffect(()=>{
    				this is useEffect;

    				return()=>{
    					//This return acts as componentWillUnmount in useEffect, this function will invoke while we leave our page so all the cleaning process such as clearing intervals can be done here.
    				}
    			},[]);

#Day9 - Optimizing our app - Custom Hooks - We can make our own custom hooks which will be dedicated for specifuc purpose. - As we build our restaurant menu card with the help of custom hook. - We also build a feature if an user is offline or online - We added an event listner for the same. - Optimising (bundling)

    - The idea is to bundle the features and resourses required to run the feature to be bundled together.

    - Lazy loading
    	- This function is provided us by react.
    	- Only when we require resources they are loaded onto the web browser.
    	- At first the files which are lazy loaded are not available.
    	- React is so fast if we clicked on the link which triggers the fetching of data, it tries to load the resourse which are not yet been loaded or imported. This lead to an error.
    	- For handling this type of error, react provides us Suspense function.

    	This feature comes handy when the size of the compoenent increases and is hectic to load.
    	So such components can be loaded when required reducing the unwanted fetching of the resourse.

#Day10 - Jo dikhta hai, wo bikta hai! - Tailwind CSS - Rapidly build modern websites without ever leaving your HTML/JSX - Generic frameworks works with any other framework not just react.
Installing Tailwind CSS into our react project - npm install -D tailwindcss postcss
This is used to install taiwind package into react
postcss is nothing but a developement tool used to transformer CSS with javascript.

    	- npx tailwindcss init
    		initializing tailwind repo in our project
    		creates tailwind.config.js
    		we need to edit the content element of tailwind.config.js to the types of file in which we will be using out tailwind

    	- Config file for the postcss.
    		make a new file and name it as .postcssrc
    		Parcel needs postcssrc to read tailwind.

    - Tailwind css gives you ready to use classes.
    - Dynamic Classes in tailwind css
    	we can make our own dynamic classes in Tailwind
    		eg w-[200px] here we mentioned how much width we need by mentioning it in the square brackets.

    lightweight
     - When the parecl will make the bundle of the files it will only load the classes that we have used which makes it lightweight.

    - Common CSS classes
    	p - this is padding
    	px - adding on the horizontal axis i.e. left and right.
    	py - padding on the veritcal axis i.e. top and bottom.
    	m - margin
    	mx - horizontal axis
    	my - vertical axis

    	flex - same as display flex
    	flex wrap - this makes columns and rows which fit according to the size of the display
    	border - adding border to the html element
    	rounded-"value" - this add rounded border to the html element, value can be sm, lg, md, etc.
    	hover:proerty-value - behavior of the element after hovering on it.
    	hover:scale-125 - this changes the size after hovering on the element. 100 is the orignal size of the element before.
    	hover:text-property-value - after hovering the property changes with given value
    	bg-color-value - this is used to change the background color.
    	justify-between - same as justify-content: space-between;
    		justify-around
    		justify-evenly
    	items-center - aligns items to the center.

#Day11 - Data is the new online

    - Higher Order component
    	-higher order components are just functions
    	-They take a component and return another component which is the enhancd version of the input component.
    	-Making modified components.

    - UI layer and DATA layer in React
    	- UI
    		JSX
    	- Data
    	 	states, props, local varibles, js we write in jsx which is modifying the data layer.


    - Controlled and uncontrolled components
    	- When an components has its own state, It was uncontrolled component. It can work and function without any outside influence.

    - Props drilling
