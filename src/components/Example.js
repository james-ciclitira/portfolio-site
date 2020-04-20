import React from 'react'
import PropTypes from 'prop-types';

class Example extends React.Component {
  render() {
    return (

<section className='mt5 '>
  <div className='w-100 w-70-ns'>
    <h3>{this.props.title}</h3>
    <p>{this.props.text}</p>
    <p className='black-70 f6'>{this.props.help}</p>
  </div>
</section>
    )
  }
}

Example.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img1: PropTypes.string.isRequired,

};




export default Example