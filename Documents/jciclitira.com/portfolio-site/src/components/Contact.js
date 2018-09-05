import React from 'react'

class Contact extends React.Component {
  render() {

    return (
<section className='center mt6 bg-transparent' id='form'>
<h1 className='mb5 pt5'>Get in touch</h1>
  <form name="contact" method="post" action="/thanks/" data-netlify="true" data-netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="contact" />
    <input type="hidden" name="form-name" value="contact"/><p hidden><label>Don’t fill this out:<input name="bot-field"/></label></p>
    <input className='w-40-ns mb4 mb0-ns w-100 bg-transparent' type='name' name='email' placeholder='Name' required/>
    <input className='w-40-ns w-100 ml3-ns ml0 bg-transparent' type='email' name='email' placeholder='Email' required/>
    <textarea rows="3" placeholder='Message' className="db w-100 mt4 bg-transparent pointer" name="message" required/>
<button className='f6 grow no-underline bn ph4 pv3 mt3 dib bg-black white mt5 shadow-4 pointer'
    style={{borderRadius:'6px'}}
    type="submit">Send</button>
    </form>

</section>
    )
  }
}
export default Contact

