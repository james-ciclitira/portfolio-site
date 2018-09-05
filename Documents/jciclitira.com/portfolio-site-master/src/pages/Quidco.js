import React from "react"
import CaseStudyAbout from '../components/CaseStudyAbout.js'
import CaseStudyImages from '../components/CaseStudyImages'
import Footer from '../components/Footer'



const Quidco = () =>
<div className='pt5'>
<CaseStudyAbout
about='Quidco is the number one cashback service. Partnering with retailers to help consumers earn 100s of pounds of cashback every year.'
role='My role comprised continual improvement & development of  the iOS and Android applications.'
clients='Mobile Designer '
job='Wireframing, User Interface Design, Design library'
/>
<div className='ph0-ns ph2-m ph3 db center mw8'>
  <CaseStudyImages  img='images/quidco/quidco-1.jpg'/>
  <CaseStudyImages  img='images/quidco/quidco-2.jpg'/>
  <CaseStudyImages  img='images/quidco/quidco-6.jpg'/>
  <CaseStudyImages  img='images/quidco/quidco-4.jpg'/>
  <CaseStudyImages  img='images/quidco/quidco-5.jpg'/>
  <CaseStudyImages  img='images/quidco/quidco-3.jpg'/>

</div>
<Footer/>
</div>
export default Quidco
