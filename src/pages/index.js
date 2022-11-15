import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"


import CardItem1 from "../components/Blog/CardItem1"
import CardItem2 from "../components/Blog/CardItem2"



const IndexPage = ({data}) => {
  const { FutureArticles, FeaturedArticles, PostArticles, RecentlyViewedArticles } = data
  return (
    <Layout>
      <div className="w-full py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="w-full">
            <h2 className="text-2xl capitalize font-bold pb-2">Coming Soon</h2>
            <div className="border-b-4 border-gray-400 w-28"></div>
            <div className="relative py-10">
              <div className="absolute inset-0">
                <div className="h-1/3 bg-white sm:h-2/3" />
              </div>
              <div className="relative mx-auto max-w-7xl">
                <div className="mx-auto mt-4 grid gap-5 lg:max-w-none lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
                  {FutureArticles && FutureArticles.edges && FutureArticles.edges.map((item, index)=><CardItem1 key={index} data={item.node} />)}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 mt-20">
                {PostArticles && PostArticles.edges && PostArticles.edges.map((item, index)=><CardItem2 key={index} data={item.node} />)}
              </div>
              <div className="relative mx-auto max-w-7xl mt-20">
                <h2 className="text-2xl capitalize font-bold pb-2">Recently Viewed</h2>
                <div className="border-b-4 border-gray-400 w-28"></div>
                <div className="mx-auto mt-10 grid gap-5 lg:max-w-none lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
                  {RecentlyViewedArticles && RecentlyViewedArticles.edges && RecentlyViewedArticles.edges.map((item, index)=><CardItem1 key={index} data={item.node} />)}
                </div>
              </div>
              <div className="mt-20">
                <h2 className="text-2xl capitalize font-bold pb-2">Featured</h2>
                <div className="border-b-4 border-gray-400 w-28"></div>
              </div>
              <div className="grid grid-cols-1 gap-4 mt-10">
              {FeaturedArticles && FeaturedArticles.edges && FeaturedArticles.edges.map((item, index)=><CardItem2 key={index} data={item.node} />)}
              </div>
            </div>

          </div>
        </div>
      </div>
    </Layout >
  )

}

export const query = graphql`
query HomePageQuery {
  FutureArticles: allContentfulPosts(filter: {futureArticle: {eq: true}}, limit: 4) {
    edges {
      node {
        title
        slug
        featuredImage {
          gatsbyImage(layout: CONSTRAINED, width: 600, height: 500)
        }
        publishDate(formatString: "MMMM DD, YYYY")
        shortDescription {
          shortDescription
        }
        postTypes
        lastViewed(formatString: "MMMM DD, YYYY")
      }
    }
  }
  FeaturedArticles: allContentfulPosts(filter: {featured: {eq: true}}, limit: 4) {
    edges {
      node {
        title
        slug
        featuredImage {
          gatsbyImage(layout: CONSTRAINED, width: 600, height: 500)
        }
        publishDate(formatString: "MMMM DD, YYYY")
        shortDescription {
          shortDescription
        }
        postTypes
        lastViewed(formatString: "MMMM DD, YYYY")
      }
    }
  }
  PostArticles: allContentfulPosts(filter: {postTypes: {eq: "Post"}}, limit: 4) {
    edges {
      node {
        title
        slug
        featuredImage {
          gatsbyImage(layout: CONSTRAINED, width: 600, height: 500)
        }
        publishDate(formatString: "MMMM DD, YYYY")
        shortDescription {
          shortDescription
        }
        postTypes
        lastViewed(formatString: "MMMM DD, YYYY")
      }
    }
  }
  RecentlyViewedArticles: allContentfulPosts(
    filter: {futureArticle: {eq: true}}
    sort: {lastViewed: DESC}
    limit: 4
  ) {
    edges {
      node {
        title
        slug
        featuredImage {
          gatsbyImage(layout: CONSTRAINED, width: 600, height: 500)
        }
        publishDate(formatString: "MMMM DD, YYYY")
        shortDescription {
          shortDescription
        }
        postTypes
        lastViewed(formatString: "MMMM DD, YYYY")
      }
    }
  }
}
`

export default IndexPage
