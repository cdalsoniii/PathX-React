import React from 'react'

import PropTypes from 'prop-types'

import QuoteBlock from './quote-block'
import './never-go-back.css'

const NeverGoBack = (props) => {
  return (
    <div className={`never-go-back-container ${props.rootClassName} `}>
      <div className="never-go-back-container1 hover-translate-y-16"></div>
      <div className="never-go-back-container2 hover-translate-y-16">
        <div className="never-go-back-nevergoback-section">
          <span className="never-go-back-text">
            <span className="">
              PathX replaces unreliable freelancers and expensive agencies for
              one flat monthly fee, design to app deployment so fast that it
              will blow your mind.
            </span>
          </span>
          <QuoteBlock
            rootClassName="quote-block-root-class-name1"
            className=""
          ></QuoteBlock>
          <div className="never-go-back-container3"></div>
          <div className="never-go-back-f-a-q">
            <div className="never-go-back-section-heading">
              <span className="never-go-back-text02 text-transparent">
                <span className="">
                  <span className="">Manage with Trello</span>
                  <br className=""></br>
                  <span className=""></span>
                  <br className=""></br>
                  <span className=""></span>
                  <br className=""></br>
                  <span className=""></span>
                  <br className=""></br>
                  <span className=""></span>
                </span>
              </span>
            </div>
          </div>
          <div className="never-go-back-f-a-q1">
            <div className="never-go-back-section-heading1">
              <span className="never-go-back-text13">
                <span className="never-go-back-text14">
                  <span className="">Invite unlimited team members</span>
                  <br className=""></br>
                  <span className=""></span>
                </span>
                <span className="never-go-back-text18">
                  Invite your entire team, so anyone can submit requests and
                  track their progress.
                </span>
              </span>
            </div>
          </div>
          <div className="never-go-back-f-a-q2">
            <div className="never-go-back-section-heading2">
              <span className="never-go-back-text19">
                <span className="never-go-back-text20">Totally Async</span>
                <span className="never-go-back-text21">
                  <span className="">l</span>
                  <br className=""></br>
                  <span className=""></span>
                </span>
                <span className="">
                  <span className=""></span>
                  <br className=""></br>
                  <span className=""></span>
                  <br className=""></br>
                  <span className=""></span>
                  <br className=""></br>
                  <span className=""></span>
                </span>
              </span>
            </div>
          </div>
          <span className="never-go-back-text33 text-transparent">
            <span className="">
              Manage your project using Trello. View active, queued and
              completed tasks with ease.
            </span>
          </span>
          <span className="never-go-back-text35">
            <span className="">
              Not a fan of meetings? Meetings aren’t needed here, just chat :)
            </span>
          </span>
          <span className="never-go-back-text37 font-heading mb-6 font-bold text-7xl text-gray-900">
            <span className="">It’s “you’ll never go back” better</span>
          </span>
        </div>
      </div>
    </div>
  )
}

NeverGoBack.defaultProps = {
  rootClassName: '',
}

NeverGoBack.propTypes = {
  rootClassName: PropTypes.string,
}

export default NeverGoBack
