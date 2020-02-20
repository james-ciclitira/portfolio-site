import React from 'react'
import PropTypes from 'prop-types';
import Link from 'gatsby-link'

class PersonalProjects extends React.Component {
  render() {
    return (
 <div className='w-third-ns w-100 dib pr5-ns pl0-ns mv3 v-top'>
 <a target='blank' href={this.props.link} >
 <img className='hoverable br5'src={this.props.img} alt='UX/UI'/>
 </a>
    <div className='pv2'>
      <h3 className='mt3 mb0'>{this.props.title}</h3>
      <p className='dib mt2 f7 secondary-text'>{this.props.info}</p>
    </div>
</div>

    )
  }
}
PersonalProjects.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
export default PersonalProjects

