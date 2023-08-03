import React from 'react'
import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import atlassian from '../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'
import shopify from '../../assets/shopify.png'


import './brand.css';
const Brand = () => {
  return (
    <div className='gpt3__brand'>
      <p><img src={google}/></p>
      <p><img src={slack}/></p>
      <p><img src={atlassian}/></p>
      <p><img src={dropbox}/></p>
      <p><img src={shopify}/></p>
    </div>
  )
}

export default Brand