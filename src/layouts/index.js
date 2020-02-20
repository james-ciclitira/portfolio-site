import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import './index.css'


const Header = () =>

   <nav className='mw8 db center' >
        <div className="dt-l w-100 border-box pa3 pt5">
          <Link className="db dtc-l v-mid link hover-orange tc tl-l mb0-l mb2 f5" to="/" title="Home">James Ciclitira</Link>
          <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
            <a className="link dib mr3-l mr0 hover-orange f5" target='blank' href="https://jciclitira-resume.netlify.com/">Resumé</a>
          </div>
        </div>
      </nav>

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="James Ciclitira - Product designer"
      link={[

{ rel: 'apple-touch-icon', size: '180x180', href: 'favicon_io/apple-touch-icon.png' },
{ rel: 'icon', type:'image/png',  size: '32x32', href: 'favicon_io/favicon-32x32.png' },
{ rel: 'icon',  type:'image/png',  size: '16x16', href: 'favicon_io/favicon-16x16.png' },
{ rel: 'manifest', href:'favicon_io/site.webmanifest' },
        ]}
      meta={[
        { name: 'description', content: 'Digital Product Designer based in Berlin. Creatively resolving problems & building amazing user experiences, specialising in Mobile & Web design' },
        { name: 'keywords', content: 'Digital Product Design, James Ciclitira, UI/UX, User Interface Design, User Experiences Design, London, Europe, HTML, CSS, React, iOS, Andriod, Mobile, Web, Sketch, Prototyping, Web development, Responsive Design, User Testing, Mobile Apps, Interaction Design, Front-end Development, Digital Product Design, Jimmy, Jimi, Tech' },
        { name: 'og:type', content: 'profile' },
        { name: 'og:title', content: 'James Ciclitira - Product Designer' },
        { name: 'og:description', content: 'Digital Product Designer based in Berlin. Creatively resolving problems & building amazing user experiences, specialising in Mobile & Web design' },
        { name: 'og:url', content: 'https://jciclitira.com/' },
        { name: 'og:image', content: 'https://jciclitira.com/images/preview.png' },
        { name: 'profile:first_name', content: 'James' },
        { name: 'profile:last_name', content: 'Ciclitira' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: '@jjiiimmmy' },
        { name: 'twitter:site', content: '@jjiiimmmy' },
        { name: 'twitter:title', content: 'James Ciclitira - Freelancer Product Designer' },
        { name: 'twitter:description', content: 'Digital Product Designer based in London. Creatively resolving problems & building amazing user experiences, specialising in Mobile & Web design' },
        { name: 'twitter:image', content: 'https://jciclitira.com/images/preview.png' },
      ]}
    />
    <Header />
    <div className='center mw8 db ph3'>
      {children()}
    </div>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
