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
role='


Coup was Bosch owed electric mobility sharing service operating in Berlin, Paris & Madrid.
It was leading the way in reimagining sustainable urban transportation. However due to a lack of funding the serice was discontinued as of 2020.'



clients='Product Designer '
job='User research, Wireframing, User testing, Interface design'
/>


<div className='mb5'>
 <img className='w-30 pa2'  src='images/coup/2.jpg' alt='scooter'/>
 <img className='w-30 pa2'  src='images/coup/1.jpg' alt='scooter'/>
 <img className='w-30 pa2'  src='images/coup/3.jpg' alt='scooter'/>
</div>



<h1>My Role</h1>


<p> During my time with Coup I was a member of the team responsible for the ride. Our overall objective was to make sure that user experience was as seamless as possible for any customers interacting with the scooters. High on our list was to make sure that any scooter which were available to rent performed flawlessly or if any problems arose customers were easily able to rectify these.
</p>

            <img  src='images/coup/map.png' alt='scooter'/>





<h2>
Case study in app reporting</h2>



<h3 className='mt4'>Problem statatments</h3>

<Example
title='Unusable scooters '
text='On average 18 helmets are stolen every day when a helmet is stolen this puts the scooter out of commission until it’s replaced. The operations team only finds out that the helmet is missing when reported by the customer to the CS team.'
help='By reducing the time taken to replace the helmet means a lower potential lost earning for the scooter. A reliable hardware detection solution is unrealistic, only 20% of the time can the helmet be detected.'
img1='images/coup/4.png'
/>

<ExampleAlt
title='Unknown cancellation cause '
text='On average 12% of rides are cancelled before a customer starts the engine, there are a number of hypotheses as to why.
Such as. Damage, Low battery, Missing helm wrong scooter selected.'
help='By gathering more data we aim to address the cancellation rate and reduce this number in the future.'
img1='images/coup/5.png'
/>

<Example
title='Helmet replacement cost'
text='When a helmet is stolen it’s not clear as to  which users stole the helmet. Therefore it can be difficult to charge the correct users for the cost of the helmet.'
help='This is made worse as  not all customers report a missing helmet to CS making the potential chain of customers longer and harder to track.'
img1='images/coup/6.png'
/>



<h2>Solutions reporting</h2>

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
