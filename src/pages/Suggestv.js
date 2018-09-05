import React from "react"
import CaseStudyAbout from '../components/CaseStudyAbout.js'
import CaseStudyImg from '../components/CaseStudyImg'
import Footer from '../components/Footer'



const Suggestv = () =>
<div className='pt5'>
<CaseStudyAbout
about='Suggestv works with publishers to provide relevant video content. A publisher includes a script within a article, allowing Suggestv to find and place relevant video content.'
role='My role comprised the design and development of the web app. Its primary function was to enable users to customise and monitor their video content. The role included creating potential use cases and output designs to fit within these.'
clients='Product  & Web development'
job='UI/UX Research, Wireframing,  UI/UX Design & Front-end development'
/>
<section className='mw8 center'>
  <div className='pv4 ma0 ph2'>
  <img className='w-50-ns w-100' alt='suggestv-wireframe' src='images/suggestv/usecase.png' />
  <img className='w-50-ns w-100' alt='suggestv-wireframe' src='images/suggestv/usecase2.png' />
  <img className='w-50-ns w-100' alt='suggestv-wireframe' src='images/suggestv/usecase3.png' />
  <img className='w-50-ns w-100' alt='suggestv-wireframe' src='images/suggestv/usecase4.png' />
  </div>
  <CaseStudyImg img='images/suggestv/Search.png'/>
  <CaseStudyImg  img='images/suggestv/Search-onclick.png'/>
  <CaseStudyImg  img='images/suggestv/Demo.png'/>
  <CaseStudyImg  img='images/suggestv/Reports.png'/>
  <CaseStudyImg  img='images/suggestv/Setting.png'/>
  <CaseStudyImg  img='images/suggestv/Account.png'/>
</section>
<Footer/>
</div>
export default Suggestv
