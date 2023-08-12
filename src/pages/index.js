import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>This is a blog to showcase our project and portfolios</p>
      <StaticImage
        alt="Sumit's profile picture"
        src="../images/sumit.jpg"
      />
    </Layout>
  )
}


export const Head = () => <title>Home Page</title>


export default IndexPage;