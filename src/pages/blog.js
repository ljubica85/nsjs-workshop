import React from "react";
import { graphql, Link } from "gatsby";

export const pageQuery = graphql`
  query blogQuery {
    blog: allFile(filter: { ext: { eq: ".md" } }) {
      items: nodes {
        childMarkdownRemark {
          html
          frontmatter {
            title
            author
            date(fromNow: true)
          }
          excerpt
          id
        }
      }
    }
  }
`;

export default ({ data }) => {
  return (
    <div>
      <Link to="/">Home</Link>
      {data.blog.items.map(({ childMarkdownRemark }) => (
        <article key={childMarkdownRemark.id} className="blog-post">
          <h4>{childMarkdownRemark.frontmatter.title}</h4>
          <small>
            {childMarkdownRemark.frontmatter.author.join("and ")},{" "}
            {childMarkdownRemark.frontmatter.date}}
          </small>
          <p>{childMarkdownRemark.excerpt}</p>
        </article>
      ))}
      <p>test blog</p>
    </div>
  );
};
