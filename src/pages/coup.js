import React from "react"
import CaseStudyAbout from '../components/CaseStudyAbout.js'
import CaseStudyImages from '../components/CaseStudyImages'
import Footer from '../components/Footer'
import Example from '../components/Example'
import ExampleAlt from '../components/ExampleAlt'


const Coup = () =>
<div className='pt5'>
<CaseStudyAbout
about='Coup is a electric scooter sharing service operating in Berlin, Madrid & Paris!'
role='Coup is a Bosch owed electric mobility sharing service operating in Berlin, Paris & Madrid. It was leading the way in reimagining sustainable urban transportation. However, due to a lack of funding the service was discontinued as of mid-2020.'
clients='Product Designer '
job='User research, Wireframing, User testing, Interface design'
/>


<div className='mb5'>
 <img className='w-30-ns w-100 pa2'  src='images/coup/2.jpg' alt='scooter'/>
 <img className='w-30-ns w-100 pa2'  src='images/coup/1.jpg' alt='scooter'/>
 <img className='w-30-ns w-100 pa2'  src='images/coup/3.jpg' alt='scooter'/>
</div>


<h1>Role summary</h1>
<p className='secondary'> During my time with Coup, I was part of the team that was responsible for the ride phase. The overall objective was to make sure that user experience was as seamless as possible, for customers interacting with the scooters. Top on our prioritize was to make sure that all scooters which were available to rent performed flawlessly and if any problems arose customers were easily able to rectify these issues.</p>
<img  src='images/coup/map.png' alt='scooter'/>


<h2 className='mb4'>Case study - Customer reporting</h2>
<Example
title='Unusable scooters'
img='images/coup/role-1.png'
text='18 helmets are stolen each day on average if it is stolen the scooter is out of commission until it’s replaced. The internal operations team only finds out that the helmet is missing when its reported by the CS team.'
help='Reducing the time to replace the helmet gives Coup a lower potential loss of earning as the scooter remains out of commission for less time.'
/>
<Example
title='Unknown cancellations'
img='images/coup/role-2.png'
text='12% of rides are canceled before a customer starts the engine, there are a number of hypotheses as to the cause. zb. Damage, Low battery, Missing helmet, wrong scooter selected.'
help='By gathering data on the causes of the cancellation rate we hypotheses we can reduce the number in the near future.'
/>
<Example
title='Damage invoicing'
img='images/coup/role-3.png'
text='If a scooter is damaged it can be difficult to determine the cause & charge the guilty party especially if the scoter has had multiple riders.'
help='Not all customers report damage making the potential chain of rides hard to track.  By reducing the potential number of riders not making reports we aim to make the identification easier.'
/>

<h2 className='mt5'>Solutions reporting</h2>

<p className='w-80-ns f6 secondary w-100'>
If a customer cancels a ride without starting the engine the dismissible popup is displayed. It helps to gather data about issues faced during the ride process as well as highlighting any problems quickly to the operation team.
</p>



<img  src='images/coup/rider.png' alt='scooter'/>





<h2 className='mt5'>Community-based battery swapping</h2>


<p className='pb3 secondary f6'>This research project was undertaken to help the company gathered insights and validated assumptions on a pilot scheme.

The idea of community-based battery swapping had been in the works for a while however, it was difficult to verify many of the hypotheses being made without installing up the required infrastructure.

<br/><br/>
With the assistance of the internal operations team and few changes within the application we were able to gather real firsthand research on the validity of the scheme from active customers.
</p>

            <img  src='images/coup/swap.png' alt='scooter'/>


<h1>Operations tooling</h1>

<p className='pb3 secondary f6'>

The operational tooling suite can be separated into two subsections.  The support system a web application, enabling the dispatches to manage assets in the field both workers & scooters. This could be used to create and monitor assignments or view the status and history of a scooter.   The Field App was a mobile application used by workers out in the field to conduct maintenance and report the status of an assignment.


<br/><br/>



I was responsible for the design and continuous development of the tooling suite. With its implementation, we saw improved fleet operational efficiency across markets which help to reduced company costs.

</p>
<img  src='images/coup/runner.png' alt='scooter'/>
<img  src='images/coup/report.png' alt='scooter'/>

<img className='w-50-ns w-100 dib'  src='images/coup/login.png' alt='scooter'/>
<img  className='w-50-ns w-100 dib'  src='images/coup/tickets.png' alt='scooter'/>
<img  className='w-50-ns w-100 dib'  src='images/coup/status.png' alt='scooter'/>
<img  className='w-50-ns w-100 dib'  src='images/coup/overview.png' alt='scooter'/>





<Footer/>
</div>
export default Coup
