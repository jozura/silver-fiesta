import React, {useEffect} from 'react'
import './App.css';
import Navbar from './components/Navbar/index'
import ExamplePage from './pages/ExamplePage'
import StrategyCreation from './pages/StrategyCreation'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components';


const MainWrapper = styled.div`
	margin-right: auto; /* 1 */
	margin-left:  auto; /* 1 */
	margin-top: 10px;
    max-width: 1520px; /* 2 */
	padding: 4rem;
  	box-shadow: 0 15px 30px 0 rgba(0,0,0,0.11),
    0 5px 15px 0 rgba(0,0,0,0.08);
  	background-color: white;
  	border-radius: 0.5rem;
	border-color: grey;
  
 	border-left: 0 solid #00ff99;
  	transition: border-left 300ms ease-in-out, padding-left 300ms ease-in-out;
`;

function App() {
	useEffect(() => {
		window.addEventListener("message", event => {
		  if (event.origin !== process.env.REACT_APP_API_URL) return;
	
		  const { token, ok } = event.data;
		  if (ok) {
			localStorage.setItem("jwtToken", token);
			console.log(token);
		  }
		});
	  }, []);

  return (
	// Set background color of the whole site
	<div style = {{
		backgroundColor: 'grey'
	}}>
    
	<Router>
		<Navbar/>
		<MainWrapper>
			<Switch>
				<Route path="/" exact component={ExamplePage}/>
				<Route path="/route1" exact component={StrategyCreation}/>
				<Route path="/route2" exact component={ExamplePage}/>
				<Route path="/route3" exact component={ExamplePage}/>
				<Route path="/route4" exact component={ExamplePage}/>
			</Switch>
		</MainWrapper>
	</Router>
	</div>
  );
}

export default App;
