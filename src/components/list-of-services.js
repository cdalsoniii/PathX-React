import React from 'react'

import PropTypes from 'prop-types'

import './list-of-services.css'

const ListOfServices = (props) => {
  return (
    <div className={`list-of-services-container ${props.rootClassName} `}>
      <div className="list-of-services-appswebsitesandautomations-section">
        <img
          alt="Rectangle88320"
          src="/playground_assets/rectangle88320-kcup-700h.png"
          className="list-of-services-rectangle8"
        />
        <div className="list-of-services-textwrap">
          <span className="list-of-services-text">
            <span className="">Websites</span>
          </span>
        </div>
        <span className="list-of-services-text02">
          <span className="">Cross-platform applications</span>
        </span>
        <span className="list-of-services-text04">
          <span className="">Automations</span>
        </span>
        <img
          alt="Line18320"
          src="/playground_assets/line18320-84zg.svg"
          className="list-of-services-line1"
        />
        <div className="list-of-services-textwrap01">
          <span className="list-of-services-text06">
            <span className="">Preact, React</span>
          </span>
        </div>
        <img
          alt="Line48321"
          src="/playground_assets/line48321-xaaq.svg"
          className="list-of-services-line4"
        />
        <div className="list-of-services-textwrap02">
          <span className="list-of-services-text08">
            <span className="">
              Flutter - Design, Development &amp; Deployment
            </span>
          </span>
        </div>
        <img
          alt="Line88322"
          src="/playground_assets/line88322-uem5.svg"
          className="list-of-services-line8"
        />
        <div className="list-of-services-textwrap03">
          <span className="list-of-services-text10">
            <span className="">Zapier- Development &amp; Deployment</span>
          </span>
        </div>
        <img
          alt="Line118323"
          src="/playground_assets/line118323-ct.svg"
          className="list-of-services-line11"
        />
        <div className="list-of-services-textwrap04">
          <span className="list-of-services-text12">
            <span className="">IFTTT - Development &amp; Deployment</span>
          </span>
        </div>
        <img
          alt="Line138324"
          src="/playground_assets/line138324-z6w.svg"
          className="list-of-services-line13"
        />
        <div className="list-of-services-textwrap05">
          <span className="list-of-services-text14">
            <span className="">Workato - Development &amp; Deployment</span>
          </span>
        </div>
        <img
          alt="Line148324"
          src="/playground_assets/line148324-re5n.svg"
          className="list-of-services-line14"
        />
        <div className="list-of-services-textwrap06">
          <span className="list-of-services-text16">
            <span className="">Tray.io - Development &amp; Deployment</span>
          </span>
        </div>
        <img
          alt="Line128323"
          src="/playground_assets/line128323-86p2.svg"
          className="list-of-services-line12"
        />
        <div className="list-of-services-textwrap07">
          <span className="list-of-services-text18">
            <span className="">
              Bubble - Design, Development &amp; Deployment
            </span>
          </span>
        </div>
        <img
          alt="Line108323"
          src="/playground_assets/line108323-1j56.svg"
          className="list-of-services-line10"
        />
        <div className="list-of-services-textwrap08">
          <span className="list-of-services-text20">
            <span className="">
              Adaloo - Design, Development &amp; Deployment
            </span>
          </span>
        </div>
        <img
          alt="Line98322"
          src="/playground_assets/line98322-rpeu.svg"
          className="list-of-services-line9"
        />
        <div className="list-of-services-textwrap09">
          <span className="list-of-services-text22">
            <span className="">NEXT, Gatsby, Preact, Stencil</span>
          </span>
        </div>
        <img
          alt="Line58321"
          src="/playground_assets/line58321-rznf.svg"
          className="list-of-services-line5"
        />
        <div className="list-of-services-textwrap10">
          <span className="list-of-services-text24">
            <span className="">Vue, Nuxt</span>
          </span>
        </div>
        <img
          alt="Line68321"
          src="/playground_assets/line68321-co1s.svg"
          className="list-of-services-line6"
        />
        <div className="list-of-services-textwrap11">
          <span className="list-of-services-text26">
            <span className="">Shopify, Ecommerce</span>
          </span>
        </div>
        <img
          alt="Line78322"
          src="/playground_assets/line78322-z65b.svg"
          className="list-of-services-line7"
        />
        <img
          alt="Line28320"
          src="/playground_assets/line28320-yh5.svg"
          className="list-of-services-line2"
        />
        <span className="list-of-services-text28">
          <span className="">Custom API Development</span>
        </span>
        <img
          alt="Line158324"
          src="/playground_assets/line158324-cg7f.svg"
          className="list-of-services-line15"
        />
        <img
          alt="Line38321"
          src="/playground_assets/line38321-gq5n.svg"
          className="list-of-services-line3"
        />
      </div>
    </div>
  )
}

ListOfServices.defaultProps = {
  rootClassName: '',
}

ListOfServices.propTypes = {
  rootClassName: PropTypes.string,
}

export default ListOfServices
