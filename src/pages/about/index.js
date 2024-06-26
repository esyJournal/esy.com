import React from 'react'
import AboutPageIndex from 'src/components/Page/About'
import SEO from 'src/components/SEO'
import { useSiteMetadata } from 'src/hooks/use-site-metadata'


export default function AboutPage({ location }) {
    return <AboutPageIndex location={location} />
}



export const Head = () => { 
    const { description, image, siteUrl, type, twitterUsername } = useSiteMetadata()

    const meta = {
        title: "About | Esy",
        description,
        image,
        url: `${siteUrl}/about`,
        type,
        twitterUsername,
    }
    
    return (<SEO meta={meta} />)
}
