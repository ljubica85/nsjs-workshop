import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

export const pageQuery = graphql`
  query blogQuery {
    blog: allContentfulPost {
      items: nodes {
        id
        author
        createdAt(fromNow: true)
        slug
        title
        thumbnail {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`;

export default ({ data }) => {
  console.log(data);
  return (
    <div>
      <Link to="/">Home</Link>
      {data.blog.items.map(blogPost => (
        <Link to={`blog/${blogPost.slug}`} key={blogPost.id}>
          <article key={blogPost.id} className="blog-post">
            <h4>{blogPost.title}</h4>
            <div style={{ width: "30px" }}>
              <Img fluid={blogPost.thumbnail.fluid} />
            </div>
            <small>
              {blogPost.author},{blogPost.createdAt}}
            </small>
          </article>
        </Link>
      ))}
      <p>test blog</p>
    </div>
  );
};
