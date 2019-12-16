import React from "react"
import CaseStudyAbout from '../components/CaseStudyAbout.js'
import CaseStudyImages from '../components/CaseStudyImages'
import CaseStudyImg from '../components/CaseStudyImg'
import Footer from '../components/Footer'
import ScreenshotLeft from '../components/ScreenshotLeft'
import ScreenshotRight from '../components/ScreenshotRight'



const Vivy = () =>
<div className='pt5'>
<CaseStudyAbout
about='Vivy is a electronic health record, using end-to-end encryption which allows customers to securely store and share medical documents'
role='As one of the initial designers, I supported by helping to establish the foundation of Vivy, shaping the product vision and pushing to prioritize research and the customer experience.'

clients='Product Designer '
job=' User interviews, diary studies, card sorting, storyboarding, wireframing, Interface design, Usability studies'
/>

<section className='mw8 center'>
  <div className=' ma0 ph2'>
    <img className='w-100' alt='onboarding screens' src='images/vivy/onboarding.png' />


<h1>Case Study: <br/><br/>
Document request & sharing</h1>	

<p>November 2018</p>

<p className='pb3'>Vivy allows customers to digitally request their  documents (lab. results, finding, x-rays etc.) from doctors, medical lab or hospitals and manage them on using a smartphone, regardless of opening hours or consultation times. 

Once files are on the smartphone they can be shared with safety and ease, for a more beneficial treatment.



</p>


<img className='w-100' alt='Doctors portal' src='images/vivy/request.png' />


<img className='w-100 mb5' alt='Doctors portal' src='images/vivy/request_flow.png' />


<ScreenshotRight
title='Expectation managment' 
text='In the beginning the likelihood of doctor fulfilling request was low as Vivy was a new unknown service which in turn lead to frustrated customers. To prevent frustration we need to manage expectations by improving the communication and transparency of the request service.  This was done by communicating the status of the request and educating customer about the request process as well offering possible fixes.'
img1='images/vivy/expectation1.png'
img2='images/vivy/expectation2.png'
/>



<ScreenshotLeft
title='File sharing' 
text='In principle once files had been imported to the users smartphone these files could be easily re-shared with other medical pratications. Access could be managed within the application giving patients greater control.'
img1='images/vivy/share1.png'
img2='images/vivy/share2.png'
/>



<section className='mt4 dib'>

<div className='w-50 dib'>
    <h2>Practitioners interface</h2>
    <p>Enabling a safe, easy and close bridge between healthcare practitioners and their patients. 
    Medical files can be digitally shared in a secure and transparent format saving on tansport time and costs.</p>
        <a className='bg-black white pv2 ph3 br2 dib mt4' target='blank' href='https://doc-request.netlify.com/'>View prototype</a>

  </div>
 <div className='w-50 dib'>
    <img className='='  src='images/vivy/dr.png' alt='Mobile-Screenshot'/>

  </div>




<div className='mt6'>
    <h1>Findings</h1>
    <p>

Developing a comprehensive medical file sharing network proved harder than originally anticipated. this was due to a number of factors. Firstly Vivy as a private company struggled to build trust, particularly for healthcare professionals few chose to embrace the services making the document exchange service costly and time consuming. To help combat this we fell back on the end-to-end encryption security, explaining how only the intended recipient can view the data. This helped but in hindsight for a project similar this too really developed I would argue that it would need to be developed at a state or national level.  
</p>


  </div>
 
</section>




  </div>
</section>






<section className='mw8 center pt5'>
  <div className=' ma0 ph2'>



<h1>Case Study: <br/><br/> Invoice management</h1>	 

<p>July 2018</p>

<p className='pb3'>Coming soon... 

</p>



    <img className='w-100' alt='Doctors portal' src='images/vivy/viewing.png' />


  </div>
</section>
<Footer/>
</div>
export default Vivy
