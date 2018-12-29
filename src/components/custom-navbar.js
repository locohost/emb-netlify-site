import React, { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import { Link } from 'gatsby';
//import { withRouter } from 'react-router-dom'

//import * as authService from './auth-service';
import { Consumer } from '../context';
import './custom-navbar.css';

class CustomNavbarWithContext extends Component {

	handleLogOut = () => {
		const { context, history } = this.props;
		// authService.logout();
		context.dispatch({ type: 'LOGOUT', payload: null });
		console.log('User logged out');
		history.push('/');
	}

	// Only way to force component to re-render
	componentDidUpdate = (props) => {
		// const { context } = this.props;
		// console.log('Navbar context.userProfile: ', context.userProfile);
	}

	render = () => {
		return (
			<Consumer>
				{context => {
					return (
						<Navbar default collapseOnSelect>
							<Navbar.Header>
								<Navbar.Brand>
									<Link to="/">easy.message.bus</Link>
								</Navbar.Brand>
								<Navbar.Toggle />
							</Navbar.Header>
							<Navbar.Collapse>
								<Nav pullRight>
									<NavItem eventKey={1} componentClass={Link} href="/" to="/">HOME</NavItem>
									<NavItem eventKey={2} componentClass={Link} href="/about" to="/about">ABOUT</NavItem>
									<NavItem eventKey={3} componentClass={Link} href="/news" to="/news">NEWS</NavItem>
									<NavItem eventKey={4} componentClass={Link} href="/blog" to="/blog">BLOG</NavItem>
									<NavItem eventKey={5} componentClass={Link} href="/dashboard" to="/dashboard">DASHBOARD</NavItem>
									{context && context.userProfile
										? <NavItem eventKey={6}
											componentClass={Link}
											onClick={this.handleLogOut} to="">LOGOUT</NavItem>
										: <NavItem eventKey={7}
											componentClass={Link} href="/login" to="/login">LOGIN</NavItem>
									}
								</Nav>
							</Navbar.Collapse>
						</Navbar>
					);
				}}
			</Consumer>
		);
	}
};

// Inject context into component so we have it in lifecycle methods as well as render
const CustomNavbarWithRouter = props => (
	<Consumer>
		{context =>
			<CustomNavbarWithContext {...props} context={context} />
		}
	</Consumer>
);

//const CustomNavbar = withRouter(CustomNavbarWithRouter);
const CustomNavbar = CustomNavbarWithRouter;
export default CustomNavbar;
