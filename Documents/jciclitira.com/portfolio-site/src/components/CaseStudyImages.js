import React from 'react'
import PropTypes from 'prop-types';

class CaseStudyImages extends React.Component {
  render() {
    return (
   <div className='w-third-ns w-100 ph2 dib'>
    <div className='pv4-ns pv1 ph2-ns ph2'>
      <img className='hoverable' src={this.props.img} alt='Suggestv-sematic video'/>
   </div>
   </div>
    )
  }
}

CaseStudyImages.propTypes = {
  img: PropTypes.string.isRequired,
};
export default CaseStudyImages

