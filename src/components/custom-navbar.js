import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export const CustomNavbar = withStyles(styles)(ButtonAppBar);



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