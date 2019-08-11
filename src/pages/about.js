import React from "react"
import {graphql} from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reuseable/HeroSection'
import InfoBlock from '../components/Reuseable/infoblock'
import DualInfoBlock from '../components/Reuseable/DualInfoBlock'
import Teamphotosection from '../components/About/Teamphotosection'

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection                                              
    img={data.img.childImageSharp.fluid}
    title="About LearnCodeOnline"
    subtitle=""
    heroclass="about-background"
    />
    <DualInfoBlock heading="A Message From Our CEO"
     img="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?cs=srgb&dl=blurred-background-code-coding-1261427.jpg&fm=jpg"  />
    <InfoBlock heading="About Vision" />
    <Teamphotosection/>
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


export default AboutPage
