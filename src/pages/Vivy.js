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
"This included setitng up a design system and helping shape product vision; pushing to help impovment the overall experience for the customers.",

]}
clients='Product Designer '
job='Wireframing, Usability testing,  Interface design, Conducting customer research, User interviews, diary studies, card sorting etc'
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
export default Vivy
