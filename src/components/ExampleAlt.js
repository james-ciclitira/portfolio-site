import React from 'react'
import PropTypes from 'prop-types';

class ExampleAlt extends React.Component {
  render() {
    return (

<section className='mv4 dib'>


 <div className='w-100 w-40-ns mt4 fl'>
    <img className='br2 h5' src={this.props.img1} alt='Mobile-Screenshot'/>
  </div>


  <div className='w-100 w-50-ns dib mt3'>
    <h2>{this.props.title}</h2>
   <p>{this.props.text}</p>
   <p>{this.props.help}</p>

  </div>

</section>
    )
  }
}

ExampleAlt.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img1: PropTypes.string.isRequired,

};




export default ExampleAlt