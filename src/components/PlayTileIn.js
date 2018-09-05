import React from 'react'
import Link from 'gatsby-link'


class PlayTileIn extends React.Component {
  render() {
    return (
<div className='w-third-ns w-100 dib pa2'>
<Link className='no-underline' to={this.props.source}>
  <div className='center'>
  <div className='w-100 ph2 pt3 pb2'>
  <img alt='Design-tool' className='h1' src={this.props.type}/>
    <h4 className='ma0 secondary-text pl3 dib'>{this.props.title}</h4>
  </div>
<div className='pv2 dib  relative'>
 <img className='hoverable' src={this.props.img} alt='Open source design'/>
 </div>
</div>
</Link>
</div>

    )
  }
}


PlayTileIn.propTypes = {
  source: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  img: React.PropTypes.string.isRequired,
};



export default PlayTileIn

