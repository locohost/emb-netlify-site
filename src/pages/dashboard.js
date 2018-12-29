import React from 'react';
//import { Link } from 'gatsby';

import Layout from '../components/layout';
//import Image from '../components/image';
import SEO from '../components/seo';

//import 'bootstrap/dist/css/bootstrap.min.css';

const DashboardPage = () => (
	<Layout>
		<SEO title="Dashboard" keywords={[`gatsby`, `application`, `react`]} />
		<h1>Dashboard</h1>
		<p>Welcome to your new Gatsby site.</p>
	</Layout>
);

export default DashboardPage;
