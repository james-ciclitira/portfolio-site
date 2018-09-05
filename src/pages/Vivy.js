import React from "react"
import CaseStudyAbout from '../components/CaseStudyAbout.js'
import CaseStudyImages from '../components/CaseStudyImages'
import Footer from '../components/Footer'



const Vivy = () =>
<div className='pt5'>
<CaseStudyAbout
about='Vivy is a electronic health record. Using state of the art end to end encryption you can securesly store medical documents and information on your phone'
role='The role comprised the design of the native application. '
clients='Product Designer '
job='Wireframing,  UI/UX Design'
/>

<div className='ph0-ns ph2-m ph3 db center mw8 mt4'>
  <CaseStudyImages  img='images/Vivy/vivy_1.png'/>
  <CaseStudyImages  img='images/Vivy/vivy_2.png'/>
  <CaseStudyImages  img='images/Vivy/vivy_3.png'/>
  <CaseStudyImages  img='images/Vivy/vivy_4.png'/>
  <CaseStudyImages  img='images/Vivy/vivy_5.png'/>
  <CaseStudyImages  img='images/Vivy/vivy_6.png'/>
</div>
<Footer/>
</div>
export default Vivy
