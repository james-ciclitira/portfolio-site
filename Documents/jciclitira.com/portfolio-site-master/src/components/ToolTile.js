import React from 'react'
import PropTypes from 'prop-types';


class ToolTile extends React.Component {
  render() {
    return <a className="mh4 pv2 pv3-m pv4-l dim pointer grow"
              style={{width:'72px'}}
              href={this.props.link}>
          <img src={this.props.img}
          className="db w-100"
          alt='Design tool'/>
          </a>;
  }
}

ToolTile.propTypes = {
  link:PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};



export default ToolTile

