import React from 'react'
import PropTypes from 'prop-types';

class ScreenshotLeft extends React.Component {
  render() {
    return (
<section className='mt4 dib'>
  <div className='w-100 w-30-ns fl'>
   <img src={this.props.img1} alt='CrowdScores - Live football scores'/>
  </div>
  <div className='w-100 w-40-ns mt4 fr'>
    <h2>{this.props.title}</h2>
    <p>{this.props.text}</p>
  </div>
  <div className='w-100 w-30-ns fl'>
    <img src={this.props.img2} alt='Mobile-Screenshot'/>
  </div>
</section>
    )
  }
}

ScreenshotLeft.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img1: PropTypes.string.isRequired,
  img2: PropTypes.string.isRequired,
};





export default ScreenshotLeft