import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import withData from "../lib/apollo";
import { useRouter } from "next/router";
import { Layout } from "../components/layout";
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Container';

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { data } = useQuery(gql`
	query {
	  postBy(slug: "${slug}") {
		title
		content
	  }
	}
  `);

  const post = data?.postBy;

  return (
	<Layout>
		<>
		<header>
			<h2 class="site-title">Go Headless</h2>
		</header>

		<article className="post">
			<Jumbotron className="jumbotron">
				<h1 className="post-title">
					{post?.title}
				</h1>
				<div dangerouslySetInnerHTML={{ __html: post?.content }} />
			</Jumbotron>
		</article>
		</>
	</Layout>
  );
};

export default withData(Post);