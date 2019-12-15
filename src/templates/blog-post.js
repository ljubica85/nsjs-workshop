import React from "react";
import { graphql } from "gatsby";
import Img from 'gatsby-image'

export default ({ data }) => {
  const { contentfulPost } = data;
  console.log(contentfulPost);
  return (
    <div>
      <h1>{contentfulPost.title}</h1>
      <div style={{width:'30%'}}>
        <Img fluid={contentfulPost.thumbnail.fluid} />
      </div>
      <small>
        {contentfulPost.author} {contentfulPost.date}
      </small>
      <div
        dangerouslySetInnerHTML={{
          __html: contentfulPost.content.childContentfulRichText.html
        }}
      />
    </div>
  );
};
export const pageQuery = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      author
      title
      subtitle
      createdAt(fromNow: true)
      thumbnail {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      content {
        childContentfulRichText {
          html
        }
      }
    }
  }
`;
