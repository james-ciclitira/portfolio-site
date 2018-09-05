import React from 'react'
import Role from './Role'

class Experience extends React.Component {
  render() {
    return (
<section>
<div className="db-ns dn center mt4">
    <h1>Past experience</h1>
    <div className='pt3 '>
    <div className='dib w-25-ns w-100'>
    <Role jobTitle='Product designer' employer='CrowdScores' img='images/companies/crowdscores-icon.svg' link='https://crowdscores.com/'/>
    <Role jobTitle='Design intern' employer='Samlabs' img='images/companies/sam-icon.svg' link='https://samlabs.com/'/>
</div>
    <div className='dib w-25-ns w-100'>
    <Role jobTitle='Product designer' employer='Numilli' img='images/companies/numilli-icon.svg' link='https://numilli.surge.sh/'/>
    <Role jobTitle='Product designer' employer='Suggestv' img='images/companies/suggestv-icon.svg' link='https://suggestv.io/'/>

    </div>

    <div className='dib w-25-ns w-100 v-top'>
    <Role jobTitle='Product designer' employer='YunoJuno' img='images/companies/yunoJuno-icon.svg' link='https://www.yunojuno.com/'/>
    <Role jobTitle='Mobile designer' employer='Quidco' img='images/companies/quidco-icon.svg' link='https://quidco.com/'/>

    </div>

    <div className='dib w-25-ns w-100 v-top'>
    <Role jobTitle='Product designer' employer='Vivy' img='images/companies/vivy_icon.svg' link='https://www.vivy.com/'/>

    </div>
</div>
    </div>
</section>
    )
  }
}
export default Experience
