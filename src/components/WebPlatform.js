import React from 'react'
import PropTypes from 'prop-types';


class WebPlatform extends React.Component {
  render() {
    return (

<section>
<div className='mw8 db pt5 center'>
  <div className='w-50-ns w-100 dib v-top ph5'>
  <h1>{this.props.summary}</h1>
  <p>{this.props.about}</p>
  <p>{this.props.about1}</p>
  <p>{this.props.about2}</p>
  </div>
 <div className='w-50-ns w-100 dib'>
 <img className='center db mt4'src={this.props.img} alt='Interface screenshot'/>
 </div>
 </div>
</section>
    )
  }
}
WebPlatform.propTypes = {
  summary: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  about1: PropTypes.string.isRequired,
  about2: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
export default WebPlatform

