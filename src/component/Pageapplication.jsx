import React from 'react'
import { Header3 } from './Formstyle'
import './style.css'

export default function Pageapplication() {
  return (
    <>
    <div className='svg-container' >    
    <svg className="svg ft-green-tick" xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 48 48" aria-hidden="true" >
        <circle className="circle" fill="#5bb543" cx="24" cy="24" r="22"/>
        <path className="tick" fill="none" stroke="#FFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M14 27l5.917 4.917L34 17"/>
    </svg>
    <div>
     <Header3></Header3>
      <h3>Application Submitted Successfully</h3>
      
    </div>

</div>
    
    </>
    
  )
}
