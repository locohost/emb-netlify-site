import React from 'react';
//import { Link } from 'gatsby';

import Layout from '../components/layout';
//import Image from '../components/image';
import SEO from '../components/seo';

//import 'bootstrap/dist/css/bootstrap.min.css';

const BlogPage = () => (
	<Layout>
		<SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
		<h1>Blog</h1>
		<p>Welcome to your new Gatsby site.</p>
	</Layout>
);

export default BlogPage;
