import React from 'react'
import Social from './Social'

class Landing extends React.Component {
  render() {
    return (
  <section >
          <main className="dib v-top pr0 pa0 tl-ns tc vh-100">
          <h1 className='f1-l mt5-ns pt3-ns pb2 lh-copy'>Hello, I’m James.<br/>Berlin based Product Designer.</h1>
          <p className='secondary-text measure lh-copy' style={{fontSize: '18px'}}>Passionate in the creation of meaningful digital experiences with a focus on user centric design. Interesting in the design of engaging and meaningful products based on users needs and data driven research.  </p>
          <Social/>
          </main>
</section>
    )
  }
}
export default Landing


