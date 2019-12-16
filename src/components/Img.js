import React from 'react'



class Img extends React.Component {
  render() {
    return (
<div className="w-100">
          <div >
            <img src={this.props.img} alt='scooter'/>
          </div>
        </div>

    )
  }
}
export default Img

