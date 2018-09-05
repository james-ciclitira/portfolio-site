import React from 'react'
import PropTypes from 'prop-types';


class WeatherTile extends React.Component {
render() {
  return (
    <a className='w-20-ns w-50-m w-100 dib pa3-ns pa2 ph2 no-underline' download="AwesomeImage.svg" href={this.props.weather}>
      <img className='pointer pv2-ns pv1'  src={this.props.weather}/>
        <p className='code  tc'>{this.props.name}</p>
     </a>
    )
  }
}
WeatherTile.propTypes = {
  name: PropTypes.string.isRequired,
  weather: PropTypes.string.isRequired,
};

export default WeatherTile

