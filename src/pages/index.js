import React from 'react';
//import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const IndexPage = () => (
	<Layout>
		<Helmet>
			<meta charSet="utf-8" />
			<title>My Title</title>
			<script type="text/javascript" src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
		</Helmet>

		<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
		<h1>Hi people</h1>
		<p>Welcome to your new Gatsby site.</p>
		<p>Now go build something great.</p>
		<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
			<Image />
		</div>
		{/* <Link to="/page-2/">Go to page 2</Link> */}
		<div data-netlify-identity-button></div>
	</Layout>
);

export default IndexPage;
