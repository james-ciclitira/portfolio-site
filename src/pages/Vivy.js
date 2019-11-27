import React from "react"
import CaseStudyAbout from '../components/CaseStudyAbout.js'
import CaseStudyImages from '../components/CaseStudyImages'
import CaseStudyImg from '../components/CaseStudyImg'
import Footer from '../components/Footer'



const Vivy = () =>
<div className='pt5'>
<CaseStudyAbout
about='Vivy is a electronic health record, using end-to-end encryption. Customers can securesly store medical documents and information on their phones.'
role={[
" As one of the first member of the design team, I helped established the foundation of Vivy.",
<br/>,<br/>,
"This included setting up a design system, helping to shape the product vision and pushing to improve the overall experience.",
]}
clients='Product Designer '
job='Wireframing, Usability testing,  Interface design, Conducting customer research, User interviews, diary studies, card sorting etc'
/>

<section className='mw8 center'>
  <div className='pv4 ma0 ph2'>

  <img className='w-40 db center' alt='loading' src='images/dog.gif' />

  <img className='w-40 db center' style={{marginTop: '-68px'}} alt='loading' src='images/soon.gif' />



  <img className='w-100 dn' alt='invoice-management' src='images/vivy/invoice management.png' />

  <img className='w-100 dn' alt='Dr-dashboard' src='images/vivy/dashboard.png' />


<a className='w-100 dn' target='blank' href='https://doc-request.netlify.com/' >pototpe </a>



  </div>
</section>
<Footer/>
</div>
export default Vivy
