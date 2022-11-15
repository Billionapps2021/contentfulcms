import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"



const CardItem1 = ({ data }) => {
    const { title, slug, featuredImage, publishDate, postTypes } = data

    const PostTypeDisplay = (type)=>{
        switch (type) {
            case 'PDF':
                return "application/pdf";
            case 'MP4':
                return "application/mp4";
            case 'Youtube':
                return "Youtube Video";
            case 'Vimeo':
                return "Vimeo Video";
            default:
                return "Post"
        }
    }
    return (
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
            <div className="flex-shrink-0">
                <Link to={`/${slug}`}><GatsbyImage image={getImage(featuredImage)} alt={title && title} className="w-full object-cover" /></Link>
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white px-6 pb-6">
                <div className="flex-1">
                    <div className="mt-2 block no-underline">
                        <h3 className="text-xl font-semibold text-gray-900 py-2"><Link to={`/${slug}`} className="text-xl font-semibold text-gray-900 no-underline">{title && title}</Link></h3>
                    </div>
                    {postTypes && postTypes!=='Post' && (
                        <h5 className="text-base font-semibold text-gray-900 py-2">{PostTypeDisplay(postTypes)}</h5>
                    )}                    
                </div>
                <div className="mt-3 flex items-center">
                    <div className="">
                        <div className="flex space-x-1 text-sm text-gray-500">
                            <time dateTime={publishDate}>{publishDate}</time>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardItem1