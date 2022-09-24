import React from 'react'

import { Helmet } from 'react-helmet'

import Websiteheader from '../components/websiteheader'
import NeverGoBack from '../components/never-go-back'
import ListOfServices from '../components/list-of-services'
import FrequentlyAskedQs from '../components/frequently-asked-qs'
import './test.css'

const Test = (props) => {
  return (
    <div className="test-container">
      <Helmet>
        <title>PathX</title>
        <meta property="og:title" content="PathX" />
      </Helmet>
      <Websiteheader rootClassName="websiteheader-root-class-name2"></Websiteheader>
      <NeverGoBack rootClassName="never-go-back-root-class-name1"></NeverGoBack>
      <ListOfServices rootClassName="list-of-services-root-class-name"></ListOfServices>
      <NeverGoBack rootClassName="never-go-back-root-class-name"></NeverGoBack>
      <FrequentlyAskedQs rootClassName="frequently-asked-qs-root-class-name"></FrequentlyAskedQs>
    </div>
  )
}

export default Test
