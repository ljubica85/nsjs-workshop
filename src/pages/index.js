import React from "react";
import { graphql, Link } from "gatsby";
import "../css/base.css";
import Title from "../components/Title";
import Img from "gatsby-image";
import Helmet from "react-helmet";

export const pageQuery = graphql`
  query MyQuery {
    site {
      siteMetadata {
        description
        title
      }
    }
    file(name: { eq: "bunny" }) {
      publicURL
      childImageSharp {
        fluid(maxWidth: 150, quality: 97) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

// export const sampleFragment = graphql`
//   fragment ChildImageSharp on ImageSharpFixed {
//     srcWebp
//   }
// `;

const Home = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Link to="/blog">Blog</Link>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
      </Helmet>
      <Title title={data.site.siteMetadata.title} />
      <p>{data.site.siteMetadata.description}</p>
      <div style={{ width: "20%" }}>
        <Img fluid={data.file.childImageSharp.fluid} />
      </div>
      <p>jeeee zeka</p>
    </div>
  );
};

export default Home;
