const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const posts = await graphql(`
    query Test {
        allContentfulPost {
            nodes {
              slug
            }
          }
    }
  `);
  if (posts.errors) {
    reporter.panicOnBuild("Error while creating pages!");
    return;
  }

  const blogPostTemlate = path.resolve("src/templates/blog-post.js");
  posts.data.allContentfulPost.nodes.forEach((post) => {
    createPage({
      path: `blog/${post.slug}`,
      component: blogPostTemlate,
      context: { slug: post.slug }
    });
  });
  reporter.info(JSON.stringify(posts, null, 2));
};
