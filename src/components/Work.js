import React from 'react'
import WorkTile from './WorkTile'
import WorkTileOut from './WorkTileOut'
import WorkTileAlt from './WorkTileAlt'
import PlayTile from './PlayTile'
import PlayTileIn from './PlayTileIn'


class Work extends React.Component {
  render() {
    return (
    <section>
        <h1 className='mb5'>Recent projects</h1>

        <WorkTile title='Coup' info='Mobile application' summary='Coup is a electric scooter sharing service operating in Berlin, Madrid & Paris!' img='images/preview/coup.jpg' link='Coup'/>
        <WorkTile title='Vivy' info='Mobile application' summary='Vivy is a digital health record. Enabling user to securely store encrypted medical documents on a smart phone' img='images/preview/vivy.jpg' link='Vivy'/>
        <WorkTile title='CrowdScores' info='Mobile application' summary='CrowdScores brings you the fastest live scores. It is a social network which allows fans to share in-match events and opinion. Running on both iOS and Android.' img='images/preview/crowdscores-app.jpg' link='/CrowdScores'/>
        <WorkTile title='YunoJuno' info='Web application' summary='YunoJuno connects the best freelancers with great companies. Employers work directly with freelancers with YunoJuno managing contact and payment.' img='images/preview/yunojuno.jpg' link='YunoJuno'/>
        <WorkTile title='QuidCo' info='Mobile application' summary='Quidco is the number one cashback service. Partnering with retailers to help consumers earn cashback every year.' img='images/preview/quidco.jpg' link='Quidco'/>
        <WorkTile title='Suggestv' info='Web application' summary='Suggestv is the inventor of semantic video distribution. Suggestv brings together content sellers and publishes creating a marketplace for online video.' img='images/preview/suggestv-platfom.jpg' link='Suggestv'/>



        <h1>Personal projects</h1>
        <WorkTileOut title='Working-out.design' info='Content management system' summary='Collection of the best free co-working spots in London. Why not submit a location?' img='images/preview/working-out.svg' link='https://working-out.netlify.com'/>
        <WorkTileOut title='Interactive résumé' info='Javascript résumé template' summary='JSON content dynamically displayed within a template.' img='images/preview/cv.svg' link='https://github.com/james-ciclitira/resume'/>
        <WorkTile title='CSS gradient' info='Interactive CSS gradients' summary='CSS for a number of gradients, simplely click to download' img='images/preview/gradient.svg' link='Gradient'/>
    </section>
    )
  }
}
export default Work

