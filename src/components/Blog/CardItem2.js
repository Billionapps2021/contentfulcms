import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const people = [
    {
        name: 'Leslie Alexander',
        role: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. similique sequi cum eos quis dolorum. adipisicing elit. similique sequi cum eos quis dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. similique sequi cum eos quis dolorum.',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
    },
    // More people...
]

const CardItem2 = ({data}) => {
    const { title, slug, featuredImage, publishDate, shortDescription, postTypes, lastViewed } = data
    return (
                <div
                    className="relative grid grid-cols-1 md:grid-cols-3 space-x-3 rounded-lg border border-gray-300 bg-white gap-10 px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
                >
                    <div className="col-start-1 col-span-1">
                    <Link to={`/${slug}`}><GatsbyImage image={getImage(featuredImage)} alt={title && title} className="object-cover" width="250" /></Link>
                    </div>
                    <div>
                        <div className="col-span-2">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4"><Link to={`/${slug}`} className="text-xl font-semibold text-gray-900 no-underline">{title && title}</Link></h3>
                            <div className="text-base text-gray-500 leading-6 w-full mb-4">{shortDescription?.shortDescription}</div>                    </div>
                        <div className="flex text-sm text-gray-500">
                            <time dateTime={publishDate}>{publishDate}</time>
                        </div>
                    </div>
                </div>
    )
}
export default CardItem2