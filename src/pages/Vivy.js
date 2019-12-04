import React from "react"
import CaseStudyAbout from '../components/CaseStudyAbout.js'
import CaseStudyImages from '../components/CaseStudyImages'
import CaseStudyImg from '../components/CaseStudyImg'
import Footer from '../components/Footer'



const Vivy = () =>
<div className='pt5'>
<CaseStudyAbout
about='Vivy is a electronic health record, using end-to-end encryption which allows customers to securely store and share medical documents'
role='As one of the initial designers, I supported by helping to establish the foundation of Vivy by shaping the product vision and pushing to prioritize reaserch and the customer experience.'

clients='Product Designer '
job=' User interviews, diary studies, card sorting, storyboarding, wireframing, Interface design, Usability studies etc..'
/>

<section className='mw8 center'>
  <div className='pv4 ma0 ph2'>


  <img className='w-40 db center' style={{marginTop: '-68px'}} alt='loading' src='images/soon.gif' />



  <img className='w-100 dn' alt='invoice-management' src='images/vivy/invoice management.png' />

  <img className='w-100 dn' alt='Dr-dashboard' src='images/vivy/dashboard.png' />


<a className='w-100 dn' target='blank' href='https://doc-request.netlify.com/' >pototpe </a>



  </div>
</section>
<Footer/>
</div>
export default Vivy
