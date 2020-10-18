import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import './sass/index.scss';
import App from './App';

//Structure
//index.js
//	App
//		Navigation
//		Products
//			Product
//		ShoppingCart
//			ShoppingCartItem

//1. import { createContext } into index.js
//2. Define context in index after importing it, const MyContext = React.createContext();
//3. export the definition of context inside of index.js
//4. import the context definition into App.
//5. Wrap the contents in the return statement in App in <MyContext.Provider...
//6. Pass context state into provider in the value attribute
//7. In a child component where state is passed in as props, import the defined context from imdex.
//8. In the child component, add the Context component, making sure to chain the Consumer to it.
// example, <MyContext.Consumer>
//9. Remove props and replace it with context and use context the same was as props.
//10. See demo 50:06 for example of how to structure your map method
//11. Desctructure the context and pass in only the relevant data into the child.
//12. remove the prop drill from the parent of the child you just added the Consumer to.
//13. To add context to a sibling component, import the useContext and the defined context from index into that component and define a 
// destructured value equal to useContext(defined context), making sure to use as the destructured 
// value, the piece of the data that the component needs, specifically.
//14. Remove props from the sibling component and remove the prop drilling definition from the immediate parent component.


const AppWithRouter = withRouter(App);

ReactDOM.render(
	<Router>
		<AppWithRouter />
	</Router>,
	document.getElementById('root')
);
