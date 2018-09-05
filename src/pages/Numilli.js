import React from "react"
import CaseStudyAbout from '../components/CaseStudyAbout.js'
import CaseStudyImages from '../components/CaseStudyImages'
import Footer from '../components/Footer'



const Numilli = () =>
<div className='pt5'>
<CaseStudyAbout
about='Numilli makes it easy to quickly & securely buy bitcoins on the go, using a mobile application linked to ATM machines.'
role='My role comprised the design of the native application, web app & ATM machines. '
clients='Freelance Product Designer '
job='UI/UX Research, Wireframing,  UI/UX Design, Icon Design'
/>


<a href='http://numilli.surge.sh/'> Static side under development <span className='green'> numilli.surge.sh </span> </a>
<div className='ph0-ns ph2-m ph3 db center mw8 mt4'>
  <CaseStudyImages  img='images/numilli/numilli-5.png'/>
  <CaseStudyImages  img='images/numilli/numilli-2.png'/>
  <CaseStudyImages  img='images/numilli/numilli-3.png'/>
  <CaseStudyImages  img='images/numilli/numilli-4.png'/>
  <CaseStudyImages  img='images/numilli/numilli-7.png'/>
  <CaseStudyImages  img='images/numilli/numilli-6.png'/>
</div>
<Footer/>
</div>
export default Numilli
