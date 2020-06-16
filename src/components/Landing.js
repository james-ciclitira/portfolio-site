import React from 'react'
import Social from './Social'

class Landing extends React.Component {
  render() {
    return (
<section className="dib v-top tl-ns tc vh-100 dib relative">

          <h1 className='f1-l mt5-ns mb2 pt3-ns pb0 lh-copy fw5'>Hello I'm James,<br/>Digital Product Designer</h1>
          <p className='pr6-l pr0 mr2-l mr0 lh-copy' style={{fontSize: '20px'}}>
Passionate about creative problem solving and creating meaningful  experiences. Interested in education, human-to-computer interaction, social change, sustainability, and accessibility.</p>
<Social/>


</section>
    )
  }
}
export default Landing