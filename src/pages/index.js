import React from "react"
import {graphql} from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from '../components/Reuseable/HeroSection'
import InfoBlock from '../components/Reuseable/infoblock'
import DualInfoBlock from '../components/Reuseable/DualInfoBlock'
import Coursecart from "../components/Cart/Coursecart"


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection                                              
    img={data.img.childImageSharp.fluid}
    title="I write Code"
    subtitle="DEXTREX2K19"
    heroclass="hero-background"
    />
    <InfoBlock heading="About Us" />
    <Coursecart courses = {data.courses} />
    <DualInfoBlock heading="Our Team"
     img="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?cs=srgb&dl=blurred-background-code-coding-1261427.jpg&fm=jpg"  />
  </Layout>
)
export const query = graphql`
{
  img: file(relativePath: { eq: "heromain.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
   courses:allContentfulCourses{
    edges{
      node{
        id
        title
        price
        category
        description {
          description
        }
        image{
          fixed(width:200, height:120){
            ...GatsbyContentfulFixed_tracedSVG
          }
        
        }
      }
    }
  }
}
`


export default IndexPage
