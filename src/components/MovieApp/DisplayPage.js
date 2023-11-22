import { Link } from 'react-router-dom'
import React from 'react'
import './MovieApp.css'
import HorrorsList from './HorrorsList'
import CemedyList from './CemedyList'
import SciFI from './SciFi'
import DocumentList from './DocumentList'
const DisplayPage = () => {
  return (
  <>  <div className='display'>
  <div className='overlay'>
 <div className='display-info'>
 <p className='display-text'>YOUR ONE STOP <span className='span'>MOVIE</span> PALACE</p>
 <p className='display-title'>Search for unlimited movies from various genres to watch next</p>
{/* <p className='display_text-b'>Anywhere, Anytime</p> */}
<Link to="/elementList" className='display_3'>Get started<img src='arrow.svg' alt='' /></Link>


 </div>
    </div>

</div>
<div>
<HorrorsList />
<CemedyList />
<SciFI />
<DocumentList />


</div>
  
  </>
  )
}

export default DisplayPage
