import React from "react"
import Layout from "../Components/layout"
import Header from "../Components/Header/header"
import AboutMe from '../Components/AboutMe/aboutMe'
import Education from '../Components/Education/Education'
import Competences from '../Components/Competences/competences'
import SEO from '../Components/seo'
import PersonalProjects from '../Components/Personal projects/PersonalProjects'

export default function Home({data}) {
  return (
    <Layout>
      <SEO title={'Boris Grunwald - Software Developer'}/>
      <Header />
      <AboutMe/>
      <Education/>
      <Competences/>
    </Layout>
  )
}
