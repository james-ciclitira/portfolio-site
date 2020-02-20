import React from "react"
import CaseStudyAbout from '../components/CaseStudyAbout.js'
import CaseStudyImages from '../components/CaseStudyImages'
import Footer from '../components/Footer'



const Coup = () =>
<div className='pt5'>
<CaseStudyAbout
about='Coup is a electric scooter sharing service operating in Berlin, Madrid & Paris!'
role='Coming soon'
clients='Product Designer '
job='Wireframing, User research, User testing, Interface design'
/>


<div className='mb5'>
 <img className='w-30 pa2'  src='images/coup/2.jpg' alt='scooter'/>
 <img className='w-30 pa2'  src='images/coup/1.jpg' alt='scooter'/>
 <img className='w-30 pa2'  src='images/coup/3.jpg' alt='scooter'/>
</div>

<h2>Customer app</h2>
            <img  src='images/coup/rider.png' alt='scooter'/>
            <img  src='images/coup/swap.png' alt='scooter'/>


<h2>Fleet servicing app</h2>
            <img  src='images/coup/runner.png' alt='scooter'/>
            <img  src='images/coup/report.png' alt='scooter'/>

<h2>Dispatchers interface</h2>
            <img className='w-50 dib'  src='images/coup/login.png' alt='scooter'/>
            <img  className='w-50 dib'  src='images/coup/tickets.png' alt='scooter'/>
            <img  className='w-50 dib'  src='images/coup/status.png' alt='scooter'/>
            <img  className='w-50 dib'  src='images/coup/overview.png' alt='scooter'/>



<h2 className='tc mt6'>Case study coming soon...</h2>


<Footer/>
</div>
export default Coup
