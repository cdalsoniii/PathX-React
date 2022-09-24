import React from 'react'

import PropTypes from 'prop-types'

import './websiteheader.css'

const Websiteheader = (props) => {
  return (
    <div className={`websiteheader-container ${props.rootClassName} `}>
      <div className="websiteheader-website-header1920px">
        <div className="websiteheader-container1">
          <img
            alt="image36920"
            src="/playground_assets/image36920-fxph-200h.png"
            className="websiteheader-image3"
          />
        </div>
        <img
          alt="image16920"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/cc441781-f8e9-45f8-9e06-0a37184e96a5/b7614bad-c007-4510-9fce-98cc338989d8?org_if_sml=113661"
          className="websiteheader-image1"
        />
        <img
          alt="image26920"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/cc441781-f8e9-45f8-9e06-0a37184e96a5/ac7c4a7a-2e9e-4540-acd6-87a516f5f905?org_if_sml=120578"
          className="websiteheader-image2"
        />
        <span className="websiteheader-text">
          <span className="">
            <span className="">A development agency</span>
            <br className=""></br>
            <span className=""> with a twist</span>
          </span>
        </span>
        <span className="websiteheader-text05">
          <span className="">
            Development subscriptions to scale your business.
          </span>
        </span>
        <div className="websiteheader-seeplans">
          <div className="websiteheader-btn-primary">
            <span className="websiteheader-text07"></span>
          </div>
          <div className="websiteheader-btn-primary1">
            <span className="websiteheader-text08">
              <span className="">See plans</span>
            </span>
          </div>
          <span className="websiteheader-text10">
            <span className="">Automations you’ll ❤️, guaranteed</span>
          </span>
        </div>
      </div>
    </div>
  )
}

Websiteheader.defaultProps = {
  rootClassName: '',
}

Websiteheader.propTypes = {
  rootClassName: PropTypes.string,
}

export default Websiteheader
