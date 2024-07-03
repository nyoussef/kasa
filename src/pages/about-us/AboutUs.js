import React from 'react'
import Banner from '../../components/banner/Banner'
import aboutUsCollapses from "../../data/aboutus.json"
import Collapse from "../../components/collapse/Collapse"
import './about-us.scss'

const AboutUs = () => {
  return (
    <div>
      <Banner bannerId="about-us" />
      <div className='collapses-container'>
        {aboutUsCollapses.map((aboutUsCollapse) => (
          <Collapse title={aboutUsCollapse.title} key={aboutUsCollapse.id} content={aboutUsCollapse.content} />
        ))}
      </div>
    </div>
  )
}

export default AboutUs