// import React from "react"
// import Layout from "../Components/layout"
// import SEO from "../Components/seo"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

// export default function Photos() {
//   // const data = useStaticQuery(graphql`
//   //   query images {
//   //     image: file(relativePath: { eq: "1.jpg" }) {
//   //       childImageSharp {
//   //         fixed(width: 200) {
//   //           ...GatsbyImageSharpFixed
//   //         }
//   //       }
//   //     }
//   //   }
//   // `)

//   console.log(data)

//   return (
//     <Layout>
//       <SEO title="Working with gatsby images" />
//       <div style={{ gridColumn: "center-start/center-end" }}>
//         <Img fluid={data.image.childImageSharp.fluid} />
//         afsefe
//       </div>
//     </Layout>
//   )
// }
