import React from 'react'
import { Link } from 'react-router-dom'

const Saved = () => {
  return (
    <div>
        <h1>Thanks For Shopping With Us</h1>
        <div >
            <Link to={{ pathname: "/" }}>Go Back To Home </Link>
        </div>
    </div>

  )
}

export default Saved