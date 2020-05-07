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
 <img className='w-30 pa2'  src='images/coup/2.jpg' alt='scooter'/>
 <img className='w-30 pa2'  src='images/coup/1.jpg' alt='scooter'/>
 <img className='w-30 pa2'  src='images/coup/3.jpg' alt='scooter'/>
</div>


<h1>Role summary</h1>
<p> During my time with Coup, I was part of the team that was responsible for the ride phase. The overall objective was to make sure that user experience was as seamless as possible, for customers interacting with the scooters. Top on our prioritize was to make sure that all scooters which were available to rent performed flawlessly and if any problems arose customers were easily able to rectify these issues.</p>
<img  src='images/coup/map.png' alt='scooter'/>


<h2>Case study - Customer reporting</h2>
<p className='ma0'>Design problem</p>

<Example
title='Unusable scooters '
text='Eighteen helmets are stolen every day on average. When the helmet is stolen scooter is placed out of commission until it’s replaced. Our internal operations team only finds out that the helmet is missing when it has been reported by the CS team.'
help='Reducing the time to replace the helmet gives Coup a lower potential loss of earning as the scooter remains out of commission for less time.'
/>

<Example
title='Cancellation cause unknown '
text='12% of rides are canceled before a customer starts the engine, there are a number of hypotheses as to the cause. zb. Damage, Low battery, Missing helmet, wrong scooter selected.'
help='By gathering data on the causes of the cancellation rate we hypotheses we can reduce the number in the near future.'
/>

<Example
title='Damage invoicing'
text='If a scooter damaged it can be difficult to determine the cause & charge the guilty party especially if the scoter has had multiple riders.'
help='Not all customers report damage making the potential chain of rides hard to track.  By reducing the potential number of riders not making reports we aim to make the identification easier.'
/>



<h2 className='mt5'>Solutions reporting</h2>

<p>
If a customer cancels a ride without starting the engine the dismissible popup is displayed. It helps to gather data about issues faced during the ride process as well as highlighting any problems quickly to the operation team.
</p>



<img  src='images/coup/rider.png' alt='scooter'/>





<h2 className='mt5'>User based battry swapping</h2>


<p className='pb3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique, sapien quis euismod suscipit, lacus leo tempus nisi, vel mollis odio odio nec nulla. Vestibulum vitae dignissim urna, at sollicitudin sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
</p>

            <img  src='images/coup/swap.png' alt='scooter'/>


<h1>Operations tooling</h1>

<p className='pb3'>Coming soon..

</p>
<img  src='images/coup/runner.png' alt='scooter'/>
<img  src='images/coup/report.png' alt='scooter'/>

<img className='w-50 dib'  src='images/coup/login.png' alt='scooter'/>
<img  className='w-50 dib'  src='images/coup/tickets.png' alt='scooter'/>
<img  className='w-50 dib'  src='images/coup/status.png' alt='scooter'/>
<img  className='w-50 dib'  src='images/coup/overview.png' alt='scooter'/>





<Footer/>
</div>
export default Coup
