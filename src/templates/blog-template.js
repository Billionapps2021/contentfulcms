import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const contentful = require('contentful-management')



const BlogTemplate = (props) => {  
  const { title, id, contentful_id, featuredImage} = props.data.postDetails

  const client = contentful.createClient({
    accessToken: 'CFPAT-uKYSmfOqI5L47zjFsIWOX8W5EsCa9lMAhm8xtE8Wtw4',
    })

  client.getSpace('t45afd1rr984')
    .then((space) => space.getEnvironment('master'))
    .then((environment) => environment.getEntry(contentful_id))
    .then((entry) => {
      entry.fields.lastViewed['en-US'] = new Date()
      return entry.update()
    })
    .then((entry) => console.log(`Entry ${entry.sys.id} updated ${new Date()}.`))
    .catch(console.error)
  console.log("props", id)  
  return (
    <Layout>
      <div className="w-full py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="w-full">
            <h2 className="text-2xl capitalize font-bold pb-2">{title && title}{id}</h2>
            <div className="w-full my-3 rounded-lg shadow-lg">
                <GatsbyImage image={getImage(featuredImage)} alt={title && title} className="w-full object-cover" />
            </div>
            </div>
          </div>
        </div>
    </Layout>
  )
}
export const query = graphql`
  query contentfulPosts($id: String!) {
    postDetails:  contentfulPosts(id: {eq: $id}) {
      id
      title
      contentful_id
      featuredImage {
        gatsbyImage(layout: FULL_WIDTH, width: 1000)
      }
      shortDescription {
        shortDescription
      }
    }
  }
`

export default BlogTemplate