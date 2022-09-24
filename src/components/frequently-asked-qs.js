import React from 'react'

import PropTypes from 'prop-types'

import './frequently-asked-qs.css'

const FrequentlyAskedQs = (props) => {
  return (
    <div className={`frequently-asked-qs-container ${props.rootClassName} `}>
      <div className="frequently-asked-qs-frequentlyasked-questions-section">
        <div className="frequently-asked-qs-f-a-q">
          <span className="frequently-asked-qs-text text-center">
            Frequently Asked Questions
          </span>
          <div className="frequently-asked-qs-section-heading"></div>
        </div>
        <span className="frequently-asked-qs-text1">
          <span className="">
            Why wouldn’t I just hire a full-time designer?
          </span>
        </span>
        <div className="frequently-asked-qs-section-heading1"></div>
        <span className="frequently-asked-qs-text3">
          <span className="">
            Is there a limit to how many requests can I have?
          </span>
        </span>
        <span className="frequently-asked-qs-text5">
          <span className="">
            How fast will my recieve my apps and automations?
          </span>
        </span>
        <span className="frequently-asked-qs-text7">
          <span className="">
            How fast will my recieve my apps and automations?
          </span>
        </span>
      </div>
    </div>
  )
}

FrequentlyAskedQs.defaultProps = {
  rootClassName: '',
}

FrequentlyAskedQs.propTypes = {
  rootClassName: PropTypes.string,
}

export default FrequentlyAskedQs
