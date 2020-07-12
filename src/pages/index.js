import React from "react"
import Layout from "../Components/layout"
import Header from "../Components/Header/header"
import AboutMe from '../Components/AboutMe/aboutMe'
import Education from '../Components/Education/Education'

export default function Home() {
  return (
    <Layout>
      <Header />
      <AboutMe/>
      <Education/>
    </Layout>
  )
}
