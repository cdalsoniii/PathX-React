import React from 'react'

import PropTypes from 'prop-types'

import './quote-block.css'

const QuoteBlock = (props) => {
  return (
    <div className={`quote-block-container ${props.rootClassName} `}>
      <img
        alt="Rectangle98525"
        src="/playground_assets/rectangle98525-wkmp-700h.png"
        className="quote-block-rectangle9 mx-auto hover-translate-y-16 transition ease-in-out duration-500 transform top-10 relative"
      />
      <img
        alt="image258723"
        src="/playground_assets/image258723-og5g-200h.png"
        className="quote-block-image25"
      />
      <div className="quote-block-f-a-q">
        <div className="quote-block-section-heading"></div>
        <span className="quote-block-text text-transparent">
          <span className="">
            We save hundreds
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className=""></br>
          <span className="">
            of hours, across
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className=""></br>
          <span className="">design, development,</span>
          <br className=""></br>
          <span className="">
            and deployment
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className=""></br>
          <span className="">every month.</span>
        </span>
      </div>
    </div>
  )
}

QuoteBlock.defaultProps = {
  rootClassName: '',
}

QuoteBlock.propTypes = {
  rootClassName: PropTypes.string,
}

export default QuoteBlock
