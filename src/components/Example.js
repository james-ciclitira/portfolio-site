import React from 'react'
import PropTypes from 'prop-types';

class Example extends React.Component {
  render() {
    return (

<section className='mv4 dib'>
  <div className='w-100 w-50-ns fl'>
    <h2>{this.props.title}</h2>
   <p>{this.props.text}</p>

      <p>{this.props.help}</p>

  </div>
  <div className='w-100 w-40-ns mt4 fr'>
    <img className='br2 h5' src={this.props.img1} alt='Mobile-Screenshot'/>
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