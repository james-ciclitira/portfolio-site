import React from 'react'
import Social from './Social'

class Landing extends React.Component {
  render() {
    return (
<section className="dib v-top tl-ns tc vh-100 dib relative ">

          <h1 className='f1-l mt5-ns mb3 pt3-ns pb0 lh-copy fw5'>Hello I'm James,<br/>Digital Product Designer</h1>
          <p className='pr6-l pr0 mr2-l mr0 lh-copy' style={{fontSize: '20px'}}>
Berlin based Product Designer creating meaningful digital experiences. <br/> Passionate about education, social change, sustainability, and accessibility.</p>

<div className='mt5 pt2'>
<Social/>
</div>

</section>
    )
  }
}
export default Landing