import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
//import { Router } from 'react-router-dom';
import { CustomNavbar } from './custom-navbar';

//import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
	<StaticQuery
		query={graphql`
    		query SiteTitleQuery {
    			site {
    				siteMetadata {
            			title
          			}
        		}
		  	}
		`}
		render={data => (
			<>
				<CustomNavbar siteTitle={data.site.siteMetadata.title} />
				<div
					style={{
						margin: `0 auto`,
						maxWidth: 960,
						padding: `0px 1.0875rem 1.45rem`,
						paddingTop: 0,
					}}
				>
					{children}
				</div>
			</>
		)}
	/>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
