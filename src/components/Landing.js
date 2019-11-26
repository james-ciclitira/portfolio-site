import React from 'react'
import Social from './Social'

class Landing extends React.Component {
  render() {
    return (
  <section >
          <main className="dib v-top tl-ns tc vh-100 dib">
          <h1 className='f1-l mt5-ns pt3-ns pb0 lh-copy fw4'>Hello I’m James,<br/>Digital product & experience designer</h1>



          <p className='secondary-text mw8 pr6 lh-copy' style={{fontSize: '18px'}}>

Passionate about the creation of meaningful digital experiences with a focus on user-centric design. Interests in sustainability, education, healthcare and universal design.  
I’m always happy to have a chat so please don’t be shy.
Enjoy your day!
</p>
          <Social/>
          </main>
</section>
    )
  }
}
export default Landing