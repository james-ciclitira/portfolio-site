import React from "react"
import CaseStudyAbout from '../components/CaseStudyAbout.js'
import ScreenshotLeft from '../components/ScreenshotLeft'
import ScreenshotRight from '../components/ScreenshotRight'


const CrowdScores = () =>
<div className='pt5'>
<CaseStudyAbout
about='CrowdScores shows live football scores from around the world. It is a social scores network which allows fans to share in-match events and opinions.'
role='I had the pleasure of working as the principal designer, taking responsibility for a variety of roles. During my time here I had the opportunity to work a excellent developement team.'
clients='Product Designer '
job='UI/UX Research, Wireframing, UI/UX Design, Icon Design, Conceptualising Ideas and Prototyping.'
/>
<div className='ph0-ns ph2 center mw8'>

<ScreenshotRight
title='Interface design' 
text='CrowdScores offers a clean, clear and useable interface on both Android and iOS platforms. The influence of material design can be clearly seen throughout the app. <br /> <br /> Whilst working on the application I stuck to the the philosophy that data within mobile applications should be scannable and easily consumed. This was achieved by respecting elements layout bounds.'
img1='images/crowdscores/match.jpg'
img2='images/crowdscores/info.jpg'
/>

<ScreenshotLeft
title='UX design' 
text='With over 1,300 matches on an average week, an intuitive user experience is crucial. Navigation within the app has been an issue due to the vast amount of infomation covered. Recently, navigation has been improved with the implementation of a search facility.'
img1='images/crowdscores/filters.jpg'
img2='images/crowdscores/more-options.jpg'
/>


<ScreenshotRight
title='Visual design' 
text='Visual are used as an important method of communication with the user. They entertain and can even trigger an emotional response to the digital. All in-match events covered within the app have a unique animation.'
img1='images/crowdscores/visual-1.jpg'
img2='images/crowdscores/visual-2.jpg'
/>
  
<a 
className='mt3 grow dib red f5'
href='https://www.ccv.adobe.com/v1/player/ccv/M3M5rR6B7GX/embed'
target='blank'>Watch now
</a>



<section className='mt5 dib' id='advertising'>
    <h2 className='ml3'>Advertising</h2>

    <div className='grow w-third-l w-50-ns pa3 w-100 fl'>
          <img className='hoverable' src='images/crowdscores/marketing/web1.jpg' alt='CrowdScore-marketing'/>
    </div>
    <div className='grow w-third-l w-50-ns pa3 w-100 fl'>
          <img className='hoverable' src='images/crowdscores/marketing/web2.jpg' alt='CrowdScore-marketing'/>
    </div>
    <div className='grow w-third-l w-50-ns pa3 w-100 fl'>
          <img className='hoverable' src='images/crowdscores/marketing/web3.jpg' alt='CrowdScore-marketing'/>
    </div>
    <div className='grow w-third-l w-50-ns pa3 w-100 fl'>
          <img className='hoverable' src='images/crowdscores/marketing/web4.jpg' alt='CrowdScore-marketing'/>
    </div>
    <div className='grow w-third-l w-50-ns pa3 w-100 fl'>
          <img className='hoverable' src='images/crowdscores/marketing/web5.jpg' alt='CrowdScore-marketing'/>
    </div>
    <div className='grow w-third-l w-50-ns pa3 w-100 fl'>
          <img className='hoverable' src='images/crowdscores/marketing/web6.jpg' alt='CrowdScore-marketing'/>
    </div>
    <div className='grow w-third-l w-50-ns pa3 w-100 fl'>
          <img className='hoverable' src='images/crowdscores/marketing/web7.jpg' alt='CrowdScore-marketing'/>
    </div>
    <div className='grow w-third-l w-50-ns pa3 w-100 fl'>
          <img className='hoverable' src='images/crowdscores/marketing/web8.jpg' alt='CrowdScore-marketing'/>
    </div>
    <div className='grow w-third-l w-50-ns pa3 w-100 fl'>
          <img className='hoverable' src='images/crowdscores/marketing/web9.jpg' alt='CrowdScore-marketing'/>
    </div>
  </section>
</div>
</div>
export default CrowdScores
