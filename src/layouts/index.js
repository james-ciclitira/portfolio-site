import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './index.css'
import Darkmode from 'darkmode-js';




const Header = () =>

   <nav>
  </nav>

const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="James Ciclitira - Digital Product Designer"
      link=
      {[
      { rel: 'apple-touch-icon', sizes: '57x57', href: 'favicon/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: 'favicon/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: 'favicon/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: 'favicon/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: 'favicon/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: 'favicon/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: 'favicon/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: 'favicon/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: 'favicon/apple-icon-180x180.png' },
      { rel: 'icon', type:'image/png', sizes: '192x192' , href: 'favicon/android-icon-192x192.png' },
      { rel: 'icon', type:'image/png', sizes: '32x32', href: 'favicon/favicon-32x32.png' },
      { rel: 'icon', type:'image/png', sizes: '96x96', href: 'favicon/favicon-96x96.png' },
      { rel: 'icon', type:'image/png', sizes: '16x16', href: 'favicon/favicon-16x16.png' },
      { rel: 'manifest', href: 'favicon/manifest.json'}
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
    <div>
      {children()}
    </div>

  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}
new Darkmode().showWidget();

export default TemplateWrapper
