import React from "react"
import Particles from 'react-particles-js';

const IndexPage = () =>

<section
style=
{{
height:'100vh',
width: '100%',
}}>
<div style={{
height:'100vh',
width: '100%',
position: 'absolute',
zIndex:'-9',

}}>


<Particles
      params={{
            		particles: {
                    "number": {
                    "value": 60
                    },
                    "size": {
                    "value": 1.5
                    },

                
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            				}
            			}
            		},
            	}}

                />

	      
</div>
<h1 
style=
{{
zIndex:'9999',
color:'white',
maxWidth: '30em',
marginRight:'auto',
marginLeft:'auto',
paddingTop:'4em', 
lineHeight:'180%',
}}>


<span style={{fontSize: '72px'}}>Hello!</span><br/><br/>
I am James, a berlin based Product Designer
Passionate in the creation of meaningful digital experiences with a focus on user centric design.<br/><br/>

Interesting in the design of engaging and meaningful products based on users needs and data driven research.

<br/><br/>

I’m always happy to have a chat so please don’t be shy and drop me an message or check out my 

<a style={{color:'white', textDecoration:'none', fontWeight:'700'}} target='blank' href='https://jimmmy.design/'> résumé.</a><br/><br/>
Have a nice day!

</h1>


</section>   


export default IndexPage
