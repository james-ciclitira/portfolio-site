import React from 'react'
import WorkTile from './WorkTile'
import WorkTileOut from './WorkTileOut'
import WorkTileAlt from './WorkTileAlt'
import PlayTile from './PlayTile'
import PlayTileIn from './PlayTileIn'
import PersonalProjects from './PersonalProjects'


class Work extends React.Component {
  render() {
    return (
    <section>
        <h2 className='mb5'>Recent projects</h2>

        <WorkTileOut title='Cooler Future' info='Mobile application - Case study coming soon ' summary='Cooler Future helps you make your voice heard and give you a app to create a positive impact with your savings, support what matters to you.' img='images/preview/Cooler-future.png' link='https://web.archive.org/web/20220301162614if_/http://www.coolerfuture.com/' />


        <WorkTile title='Coup' info='Mobile application' summary='Coup is an electric mobility service operating in Berlin, Madrid & Paris! Users can unlock and rent an electric moped via the app.' img='images/preview/coup.jpg' link='Coup'/>
        <WorkTile title='Vivy' info='Mobile application' summary='Vivy is a digital health record. Enabling customers to securely store and share encrypted medical files on a smartphone.' img='images/preview/vivy.jpg' link='Vivy'/>
        <WorkTile title='CrowdScores' info='Mobile application' summary='CrowdScores brings you the fastest live football scores as well as being a social network allowing fans to share in-match events and opinions.' img='images/preview/crowdscores-app.jpg' link='/CrowdScores'/>
        <WorkTile title='QuidCo' info='Mobile application' summary='Quidco is the number one cashback service in Europe. They partner with well-known retailers helping consumers earn cashback. ' img='images/preview/quidco.jpg' link='Quidco'/>
        <WorkTile title='Suggestv' info='Web application' summary='Suggestv is the inventor of semantic video distribution. Suggestv brings together content sellers and publishes creating a marketplace for online video content.' img='images/preview/suggestv-platfom.jpg' link='Suggestv'/>



        <h2 className='mb4'>Personal projects</h2>
        <PersonalProjects title='CMS system' info='Content management system' img='images/preview/working-out.svg' link='https://working-out.netlify.com'/>
        <PersonalProjects title='Resume template' info='Dynamically displayed JSON' img='images/preview/cv.svg' link='https://github.com/james-ciclitira/resume'/>
        <PersonalProjects title='CSS colours' info='Interactive web gradients' img='images/preview/gradient.svg' link='gradient'/>
    </section>
    )
  }
}
export default Work

