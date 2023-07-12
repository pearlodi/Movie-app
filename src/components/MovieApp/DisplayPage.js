import React from 'react'
import './MovieApp.css'


const DisplayPage = () => {
  return (
    <div className='display'>
      <div className='displays'>
        <p className='disp'>Unlimited movies, TV shows, and more
</p>
<p className='display_2'>Anywhere, Anytime</p>
<br></br>
<Link to="/elementList" className='display_3'>Get started</Link>

        </div>
    </div>
  )
}

export default DisplayPage
