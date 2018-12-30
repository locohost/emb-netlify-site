import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => (
	<Layout>
		<Helmet>
			<meta charSet="utf-8" />
			<title>EMB | Web Pub/Sub</title>
			<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
			<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
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
