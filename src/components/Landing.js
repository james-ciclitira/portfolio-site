import React from 'react'
import Social from './Social'

class Landing extends React.Component {
  render() {
    return (
  <section >
          <div className="dib v-top pr0 pa0 tl-ns tc vh-100">
          <div className='w-100 dib mt2 v-top'>
          <h1 className='f1-l mt5-ns pb2 lh-copy'><span className='red'>Hello, I’m James.</span> <br/>Berlin based Product Designer.</h1>
          <p className='secondary-text w-70-ns w-100 lh-copy' style={{fontSize: '17px'}}>Passionate in the creation of meaningful digital experiences with a focus on user centric design. Interesting in the design of engaging and meaningful products based on users needs and data driven research.  </p>
          <Social/>
          </div>
    <div className=' dn w-40 mt5'><img className=' mt4' alt='iphone-header' src='images/iphone.png'/></div>

          </div>
</section>
    )
  }
}
export default Landing


