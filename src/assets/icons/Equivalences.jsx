import React from 'react'

const Equivalences = ({ styles = ''}) => {
  return (
    <svg  
        xmlns="http://www.w3.org/2000/svg"  
        width="24"  height="24"  
        viewBox="0 0 24 24"  
        fill="none"  
        stroke="currentColor"  
        strokeWidth="2"  
        strokeLinecap="round"  
        strokeLinejoin="round"  
        className={`icon icon-tabler icons-tabler-outline icon-tabler-congruent-to ${styles}`}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M5 13h14" />
            <path d="M5 17h14" />
            <path d="M5 7.686c2.333 -2.624 4.667 -1.856 7 .064s4.667 2.688 7 .064" />
        </svg>
  )
}

export default Equivalences
