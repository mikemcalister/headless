import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import withData from "../lib/apollo";
import Link from "next/link";
import Head from "next/head";
import { Layout } from "../components/layout";
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Container';

const Home = () => {
  const { data } = useQuery(gql`
	query {
	  posts {
		nodes {
		  id
		  title
		  slug
		  excerpt
		}
	  }
	}
  `);

  const posts = data?.posts?.nodes;

  return (
	<Layout>
		<Head>
			<title>Headless WPE Blog</title>
		</Head>
		<header>
			<h1 className="site-title">Go Headless</h1>
		</header>
		
		{ posts &&
			posts.map(post => (
				<article key={post.id}>
					<Jumbotron className="jumbotron">
						<h2 className="post-title">
							<Link href={`/[slug]`} as={`/${post.slug}`}>
								<a>{post.title}</a>
							</Link>
						</h2>
						<div dangerouslySetInnerHTML={{__html: post.excerpt}} />
						<Button href={post.slug}>
							Read More
						</Button>
					</Jumbotron>
				</article>
			))
		}
	</Layout>
  );
};

export default withData(Home);