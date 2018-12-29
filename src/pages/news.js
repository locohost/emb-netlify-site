import React from 'react';
//import { Link } from 'gatsby';

import Layout from '../components/layout';
//import Image from '../components/image';
import SEO from '../components/seo';

//import 'bootstrap/dist/css/bootstrap.min.css';

const NewsPage = () => (
	<Layout>
		<SEO title="News" keywords={[`gatsby`, `application`, `react`]} />
		<h1>News</h1>
		<p>Welcome to your new Gatsby site.</p>
	</Layout>
);

export default NewsPage;
