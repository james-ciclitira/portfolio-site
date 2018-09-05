import React from 'react'
import PropTypes from 'prop-types';


class GradientCard extends React.Component {
render() {
  return (
    <div className='w-25-ns w-50 pv4 dib'>
    <article className='grow' onClick={this.props.clicked} style={{height: 300}}>
      <div className={`pointer center relative ${this.props.gradient}`} style={{height: 190, width: 120, borderRadius: '60px 60px 12px 12px'}}>
      </div>
      <div className="center relative" style={{height: 170, width: 20, backgroundColor: '#d9ac82', zIndex:'-2000', marginTop:'-80px'}}>
      </div>
      </article>
      <h3 className='fw3 tc black-60'>{this.props.title}</h3>
      </div>

    )
  }
}
GradientCard.propTypes = {
  clicked: PropTypes.string.isRequired,
  gradient: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default GradientCard

