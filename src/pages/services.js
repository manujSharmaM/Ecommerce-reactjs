import React from "react"
import {graphql} from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reuseable/HeroSection'
import InfoBlock from '../components/Reuseable/InfoBlock'
import DualInfoBlock from '../components/Reuseable/DualInfoBlock'
import Servicesphotosection from '../components/Services/Servicephotosection'

const ServicePage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection                                              
    img={data.img.childImageSharp.fluid}
    title="our Services"
    subtitle=""
    heroclass="about-background"
    />
    <DualInfoBlock heading="A Message From Our CEO"
     img="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?cs=srgb&dl=blurred-background-code-coding-1261427.jpg&fm=jpg"  />
    <InfoBlock heading="About Services" />
    <Servicesphotosection/>
  </Layout>
)
export const query = graphql`
{
  img: file(relativePath: { eq: "about.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      } 
    }
  }
}
`


export default ServicePage
