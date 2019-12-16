import React from 'react'



class Img extends React.Component {
  render() {
    return (
<a href='https://www.instagram.com/joincoup/' target='blank' className="w-100">
            <img className='hoverable' src={this.props.img} alt='scooter'/>
        </a>

    )
  }
}
export default Img

