import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements'

const Navbar = () => {
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
				<NavBtn>
					<NavBtnLink to='/signin'>Sign In</NavBtnLink>
				</NavBtn>
			</Nav>	
		</div>
	)
}

export default Navbar
