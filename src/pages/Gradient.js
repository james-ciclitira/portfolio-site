import React from 'react'
import GradientCard from '../components/GradientCard.js'

let Tangelo = `
.Tangelo {
  background: #fdb441;
  background: -moz-linear-gradient(-45deg, #fdb441 0%, #ff6e00 100%);
  background: -webkit-linear-gradient(-45deg, #fdb441 0%, #ff6e00 100%);
  background: linear-gradient(135deg, #fdb441 0%, #ff6e00 100%);
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#fdb441', endColorstr='#ff6e00', GradientType=1);
}
`
let Phlox = `
.Phlox {
  background: #fdb441;
  background: -moz-linear-gradient(-45deg, #fdb441 0%, #ff00cc 16%, #7db9e8 98%);
  background: -webkit-linear-gradient(-45deg, #fdb441 0%, #ff00cc 16%, #7db9e8 98%);
  background: linear-gradient(135deg, #fdb441 0%, #ff00cc 16%, #7db9e8 98%);
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#fdb441', endColorstr='#7db9e8', GradientType=1);
}
`
let Crimson = `
.Crimson {
  background: #ff1744;
  background: -moz-linear-gradient(-45deg, #ff1744 0%, #ffaaaa 100%);
  background: -webkit-linear-gradient(-45deg, #ff1744 0%, #ffaaaa 100%);
  background: linear-gradient(135deg, #ff1744 0%, #ffaaaa 100%);
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#ff1744', endColorstr='#ffaaaa', GradientType=1);
}
`
let Ruby = `
.Ruby {
  background: #f50057;
  background: -moz-linear-gradient(-45deg, #f50057 0%, #ffaaaa 100%);
  background: -webkit-linear-gradient(-45deg, #f50057 0%, #ffaaaa 100%);
  background: linear-gradient(135deg, #f50057 0%, #ffaaaa 100%);
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#f50057', endColorstr='#ffaaaa', GradientType=1);
}
`
let Purpureus = `
.Purpureus {
  background: #6200ea;
  background: -moz-linear-gradient(-45deg, #6200ea 0%, #ba68c8 100%);
  background: -webkit-linear-gradient(-45deg, #6200ea 0%, #ba68c8 100%);
  background: linear-gradient(135deg, #6200ea 0%, #ba68c8 100%);
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#6200ea', endColorstr='#ba68c8', GradientType=1);
}
`
let navy = `
.navy {
  background: #00838f;
  background: -moz-linear-gradient(-45deg, #00838f 0%, #7d4082 100%);
  background: -webkit-linear-gradient(-45deg, #00838f 0%, #7d4082 100%);
  background: linear-gradient(135deg, #00838f 0%, #7d4082 100%);
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#00838f', endColorstr='#7d4082', GradientType=1);
}
`
let sunset = `
.sunset {
  background: #f50057;
  background: -moz-linear-gradient(-45deg, #f50057 0%, #febc30 100%);
  background: -webkit-linear-gradient(-45deg, #f50057 0%, #febc30 100%);
  background: linear-gradient(135deg, #f50057 0%, #febc30 100%);
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#f50057', endColorstr='#febc30', GradientType=1);
}
`
let Sky = `
.Sky {
  background: #2962ff;
  background: -moz-linear-gradient(-45deg, #2962ff 0%, #29ffef 100%);
  background: -webkit-linear-gradient(-45deg, #2962ff 0%, #29ffef 100%);
  background: linear-gradient(135deg, #2962ff 0%, #29ffef 100%);
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#2962ff', endColorstr='#29ffef', GradientType=1);
}
`
let Northwestern = `
.Northwestern {
  background: #01119b;
  background: -moz-linear-gradient(-45deg, #01119b 0%, #b52a88 100%);
  background: -webkit-linear-gradient(-45deg, #01119b 0%, #b52a88 100%);
  background: linear-gradient(135deg, #01119b 0%, #b52a88 100%);
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#01119b', endColorstr='#b52a88', GradientType=1);
}
`
let sunrise = `
.sunrise {
  background: #ff6d00;
  background: -moz-linear-gradient(-45deg, #ff6d00 0%, #ffe900 99%);
  background: -webkit-linear-gradient(-45deg, #ff6d00 0%, #ffe900 99%);
  background: linear-gradient(135deg, #ff6d00 0%, #ffe900 99%);
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#ff6d00', endColorstr='#ffe900', GradientType=1);
}
`
let ocean = `
.ocean {
  background: #00bfa5;
  background: -moz-linear-gradient(-45deg, #00bfa5 0%, #006fbf 100%);
  background: -webkit-linear-gradient(-45deg, #00bfa5 0%, #006fbf 100%);
  background: linear-gradient(135deg, #00bfa5 0%, #006fbf 100%);
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#00bfa5', endColorstr='#006fbf', GradientType=1);
}

`
let teal = `
.teal {
  background: #00c853;
  background: -moz-linear-gradient(-45deg, #00c853 0%, #009ec8 100%);
  background: -webkit-linear-gradient(-45deg, #00c853 0%, #009ec8 100%);
  background: linear-gradient(135deg, #00c853 0%, #009ec8 100%);
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#00c853', endColorstr='#009ec8', GradientType=1);
}`

class GradientPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showNotification: false
        }
    }

    copyCSS(text) {
        this.setState({showNotification: true})
        let textArea = document.createElement('textarea')
        textArea.value = text
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
        setTimeout(() => {
            this.setState({showNotification: false})
        }, 1200)
    }
  render() {
    return (
    <div className='mt4'>
    <GradientCard title='Tangelo' gradient='Tangelo' clicked={() => this.copyCSS(Tangelo)} />
    <GradientCard title='Phlox' gradient='Phlox' clicked={() => this.copyCSS(Phlox)}/>
    <GradientCard title='Crimson' gradient='Crimson' clicked={() => this.copyCSS(Crimson)}/>
    <GradientCard title='Ruby' gradient='Ruby' clicked={() => this.copyCSS(Ruby)}/>
    <GradientCard title='Purpureus' gradient='Purpureus' clicked={() => this.copyCSS(Purpureus)}/>
    <GradientCard title='Navy' gradient='navy' clicked={() => this.copyCSS(navy)}/>
    <GradientCard title='Sunset' gradient='sunset' clicked={() => this.copyCSS(sunset)}/>
    <GradientCard title='Sky' gradient='Sky' clicked={() => this.copyCSS(Sky)}/>
    <GradientCard title='Northwestern' gradient='Northwestern' clicked={() => this.copyCSS(Northwestern)}/>
    <GradientCard title='Sunrise' gradient='sunrise' clicked={() => this.copyCSS(sunrise)}/>
    <GradientCard title='Ocean' gradient='ocean' clicked={() => this.copyCSS(ocean)}/>
    <GradientCard title='Teal' gradient='teal' clicked={() => this.copyCSS(teal)}/>
    <span className={`fixed white bottom-1 left-1 pv2 ph3 br2 animated ${this.state.showNotification ? 'fadeIn' : 'fadeOut'}`}
    style={{backgroundColor: '#333333', bottom: this.state.showNotification ? '16px' : '-72px'}}
    >CSS copied to clipboard</span>
    </div>
    )
  }
}
export default GradientPage
