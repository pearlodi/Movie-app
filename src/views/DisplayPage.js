import { Link } from 'react-router-dom'
import React from 'react'
import '../assets/css/MovieApp.css'
import HorrorsList from '../components/HorrorsList'
import CemedyList from '../components/CemedyList'
import SciFI from '../components/SciFi'
import DocumentList from '../components/DocumentList'
const DisplayPage = () => {
  return (
  <>  <div className='display'>
  <div className='overlay'>
 <div className='display-info'>
 <div className='display-text'>Unlimited movies, TV shows,<br></br> and more.</div>
 <p className='display-title'>Search for unlimited movies from various genres to watch next</p>
{/* <p className='display_text-b'>Anywhere, Anytime</p> */}
<Link to="/elementList" className='display_3'>Get started<img src='arrow.svg' alt='' /></Link>


 </div>
    </div>

</div>
<div className='display-desktop-bck'>
<HorrorsList />
<CemedyList />
<SciFI />
<DocumentList />


</div>
  
  </>
  )
}

export default DisplayPage
