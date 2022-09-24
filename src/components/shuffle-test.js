import React from 'react'

import PropTypes from 'prop-types'

import './shuffle-test.css'

const ShuffleTest = (props) => {
  return (
    <div className="shuffle-test-container">
      <h1 className="leading-none xl:text-10xl md:text-8xl font-heading tracking-px-n text-6xl mb-8 font-bold">
        {props.heading}
      </h1>
    </div>
  )
}

ShuffleTest.defaultProps = {
  heading: 'Start with ease,Grow your business',
}

ShuffleTest.propTypes = {
  heading: PropTypes.string,
}

export default ShuffleTest
