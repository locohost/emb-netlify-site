import React from 'react';
//import { router } from 'react-router-dom';
//import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

//import { Link } from 'gatsby';
import netlifyIdentity from 'netlify-identity-widget';

import './custom-navbar.css';
import { navigate } from 'gatsby';

const styles = {
	root: {
		flexGrow: 1,
	},
	grow: {
		flexGrow: 1,
	},
	navBttn: {
		marginRight: '10px',
		fontSize: '12pt',
		cursor: 'pointer',
		color: 'inherit',
		fontFamily: 'Roboto',
		textDecoration: 'none',
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
};

class MenuAppBar extends React.Component {
	state = {
		auth: true,
		anchorEl: null,
	};

	componentDidMount = (props) => {
		netlifyIdentity.init();
	};

	handleChange = event => {
		this.setState({ auth: event.target.checked });
	};

	handleLoginClick = (event) => {
		netlifyIdentity.open();
	};

	handleNavClick = (event, link) => {
		navigate(link);
		// switch (id) {
		// 	case 'home':
		// 		navigate('/home');
		// 		break;
		// 	case 'about':
		// 		navigate('/about');
		// 		break;
		// 	case 'news':
		// 		navigate('/news');
		// 		break;
		// 	case 'blog':
		// 		navigate('/blog');
		// 		break;
		// 	case 'dashboard':
		// 		navigate('/dashboard');
		// 		break;
		// 	case 'login':
		// 		netlifyIdentity.open();
		// 		break;
		// 	default:
		// 		console.error('Bad switch id in handleNavClick');
		// 		break;
		// }
	};

	handleMenu = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};

	render() {
		const { classes } = this.props;
		const { auth, anchorEl } = this.state;
		const open = Boolean(anchorEl);

		return (
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar>
						<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
							<MenuIcon />
						</IconButton>
						<Button 
							onClick={e => this.handleNavClick(e, '/')}
							className={classes.navBttn}>Home</Button>
						<Button 
							onClick={e => this.handleNavClick(e, '/about')}
							className={classes.navBttn}>About</Button>
						<Button 
							onClick={e => this.handleNavClick(e, '/news')}
							className={classes.navBttn}>News</Button>
						<Button 
							onClick={e => this.handleNavClick(e, '/blog')}
							className={classes.navBttn}>Blog</Button>
						<Button 
							onClick={e => this.handleNavClick(e, '/dashboard')}
							className={classes.navBttn}>Dashboard</Button>
						<Button 
							onClick={this.handleLoginClick}
							className={classes.navBttn}>Login</Button>
						<div className={classes.grow} />
						{auth && (
							<div>
								<IconButton
									aria-owns={open ? 'menu-appbar' : undefined}
									aria-haspopup="true"
									onClick={this.handleMenu}
									color="inherit"
								>
									<AccountCircle />
								</IconButton>
								<Menu
									id="menu-appbar"
									anchorEl={anchorEl}
									anchorOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									transformOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									open={open}
									onClose={this.handleClose}
								>
									<MenuItem onClick={this.handleClose}>Profile</MenuItem>
									<MenuItem onClick={this.handleClose}>My account</MenuItem>
								</Menu>
							</div>
						)}
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

MenuAppBar.propTypes = {
	classes: PropTypes.object.isRequired,
};

export const CustomNavbar = withStyles(styles)(MenuAppBar);

/*
import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';
import { Link } from 'gatsby';
//import { Link } from 'react-router-dom';
//import { withRouter } from 'react-router-dom'

//import * as authService from './auth-service';
//import { Context } from './old-context';
//import { Consumer } from './context';
//import { AppProvider } from './provider';
import { Consumer } from './create-context';
import './custom-navbar.css';

//const Consumer = Context.Consumer;

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
								</Nav>
							</Navbar.Collapse>
						</Navbar>
					);
				}}
			</Consumer>
		);
	};
	// render = () => {
	// 	return (
	// 		<Consumer>
	// 			{context => {
	// 				return (
	// 					<Navbar default collapseOnSelect>
	// 						<Navbar.Header>
	// 							<Navbar.Brand>
	// 								<Link to="/">easy.message.bus</Link>
	// 							</Navbar.Brand>
	// 							<Navbar.Toggle />
	// 						</Navbar.Header>
	// 						<Navbar.Collapse>
	// 							<Nav pullRight>
	// 								<NavItem eventKey={1} componentClass={Link} href="/" to="/">HOME</NavItem>
	// 								<NavItem eventKey={2} componentClass={Link} href="/about" to="/about">ABOUT</NavItem>
	// 								<NavItem eventKey={3} componentClass={Link} href="/news" to="/news">NEWS</NavItem>
	// 								<NavItem eventKey={4} componentClass={Link} href="/blog" to="/blog">BLOG</NavItem>
	// 								<NavItem eventKey={5} componentClass={Link} href="/dashboard" to="/dashboard">DASHBOARD</NavItem>
	// 								{context && context.userProfile
	// 									? <NavItem eventKey={6}
	// 										componentClass={Link}
	// 										onClick={this.handleLogOut} to="">LOGOUT</NavItem>
	// 									: <NavItem eventKey={7}
	// 										componentClass={Link} href="/login" to="/login">LOGIN</NavItem>
	// 								}
	// 							</Nav>
	// 						</Navbar.Collapse>
	// 					</Navbar>
	// 				);
	// 			}}
	// 		</Consumer>
	// 	);
	// };

};

// Inject context into component so we have it in lifecycle methods as well as render
//export const CustomNavbarWithRouter = props => (
export const CustomNavbar = props => (
	<Consumer>
		{context =>
			<CustomNavbarWithContext {...props} context={context} />
		}
	</Consumer>
);

//const CustomNavbar = withRouter(CustomNavbarWithRouter);
//const CustomNavbar = CustomNavbarWithRouter;
//export default CustomNavbar;
//export
*/