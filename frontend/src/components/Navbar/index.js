import React from 'react'
import { Nav, NavLink, Bars, NavMenu} from './NavbarElements'
import jwt_decode from "jwt-decode"

const Navbar = () => {
	const handleLogin = () => {
		const popupWindow = window.open(
		  process.env.REACT_APP_API_URL + "/auth/steam",
		  "_blank",
		  "width=800, height=600",
		);
		if (window.focus) popupWindow.focus();
	};

	const userElement = () => {
		const token = localStorage.getItem("jwtToken")
		if(token) {
			const userObject = jwt_decode(token)
			console.log(userObject)
			return (
				<img
					src={userObject.user.avatar}
					alt={userObject.user.name}
				/>
			)
		}
		return (
				<img
        			onClick={handleLogin}
        			src="https://steamcommunity-a.akamaihd.net/public/images/signinthroughsteam/sits_01.png"
        			alt="Login with Steam"
    			/>
		)
	}

	return(
		<div>
			<Nav>
				<NavLink to="/">
					<h1>Logo</h1>
				</NavLink>
				<Bars/>
				<NavMenu>
					<NavLink to="/route1" activeStyle>
						Home
					</NavLink>
					<NavLink to="/route2" activeStyle>
						Games
					</NavLink>
					<NavLink to="/route3" activeStyle>
						Chill
					</NavLink>
					<NavLink to="/route4" activeStyle>
						About
					</NavLink>
				</NavMenu>
				{userElement()}
			</Nav>	
		</div>
	)
}

export default Navbar
