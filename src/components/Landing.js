import React from 'react'
import Social from './Social'

class Landing extends React.Component {
  render() {
    return (
  <section >
          <main className="dib v-top tl-ns tc vh-100 dib">
          <h1 className='f1-l mt5-ns mb2 pt3-ns pb0 lh-copy fw4'>Hello I'm Jimmy,<br/>Product & Industrial Designer</h1>
          <p className='pr6-l pr0 mr2-l mr0 lh-copy' style={{fontSize: '20px'}}>
Passionate about creative problem solving and creating meaningful user experiences. Interested in education, human-to-computer communication, sustainability, and accessibility.</p>
          <Social/>
          </main>
</section>
    )
  }
}
export default Landing