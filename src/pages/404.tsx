import React from 'react'
import Heading from '../components/common/Heading/Heading'
import BackButton from '../components/common/Buttons/BackButton/BackButton'
import { useNavigate } from 'react-router-dom'


function NotFound() {
    const navigate = useNavigate()
  return (
    <div className='errorpage'>
        <Heading text='404 Page Not Found'/>
        <p>We're sorry, but it seems you've stumbled upon a page that doesn't exist.</p>
        <button onClick={()=>{navigate('/')}}>Back to Browsing</button>
    </div>
  )
}

export default NotFound