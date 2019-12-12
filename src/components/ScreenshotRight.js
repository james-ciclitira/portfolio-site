import React from 'react'
import PropTypes from 'prop-types';

class ScreenshotRight extends React.Component {
  render() {
    return (

<section className='mt3 dib'>
  <div className='w-100 w-50-ns fl'>
    <h2>{this.props.title}</h2>
   <p>{this.props.text}</p>
  </div>
  <div className='w-100 w-25-ns fr'>
    <img src={this.props.img1} alt='Mobile-Screenshot'/>
  </div>
  <div className='w-100 w-25-ns fr'>
    <img src={this.props.img2} alt='Mobile-Screenshot'/>
  </div>
</section>
    )
  }
}

ScreenshotRight.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img1: PropTypes.string.isRequired,
  img2: PropTypes.string.isRequired,

};




export default ScreenshotRight