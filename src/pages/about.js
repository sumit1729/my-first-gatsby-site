import React from "react"
import Layout from "../components/layout"

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
        <p>I am a proud creator of this site which I made using gatsby</p>
    </Layout>
  )
}

export const Head = () => (
    <>
    <title>About Me</title>
    <meta name='description' content='Your Description'/>
    </>
)

export default AboutPage