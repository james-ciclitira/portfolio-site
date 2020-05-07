import React from 'react'
import PropTypes from 'prop-types';


class Example extends React.Component {
  render() {
    return (


<article className='w-100 mv2'>
    <div className='w-70-ns w-100 dib pr4 secondary lh-copy v-top'>
    <div className='mw7'>
    <h4 className='black f5 mt3 '>Problem statement</h4>
    <p className='f6 mt2'>{this.props.text}</p>
    <h4 className='black f6'></h4>
    <p className='f6 ma0 lh-copy'><span>Hypothesis:</span> {this.props.help}</p>
    </div>
    </div>
<img className='w-30-ns w-100 mt5 mt0-ns dib' src={this.props.img} alt='bg-img'/>
</article>
    )
  }
}

Example.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img1: PropTypes.string.isRequired,

};




export default Example