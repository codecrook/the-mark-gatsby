import * as React from "react";
import { graphql, Link } from 'gatsby';
import Header from '../components/Header';


// markup
const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <>
      <Header />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'avenir'
      }}>
        {
          edges.map(edge => {
            const { frontmatter } = edge.node
            return (
              <div
                key={frontmatter.path}
                style={{ marginBottom: '1rem' }}
              >
                <Link to={frontmatter.path}>{frontmatter.title}</Link>
              </div>
            )
          })
        }
      </div>
    </>
  );
};

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    } 
  }
`;

export default IndexPage;
