const _l = require('lodash');
const Promise = require('bluebird');
const path = require("path")

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
   graphql(`
      query{
          allPosts : allContentfulPosts {
            edges {
              node {
                id
                slug
              }
            }
          }
          
      }      
  `).then((result) => {
      if (result.errors) {
        console.log(result.errors);
        reject(result.errors);
      }
      
    _l.each(result.data.allPosts.edges, (edge) => {
      createPage({
          path: `${edge.node.slug}`,
          component: path.resolve("./src/templates/blog-template.js"),
          context: {
            id: edge.node.id
          },
      })
    })






    resolve();
  });
})
}

