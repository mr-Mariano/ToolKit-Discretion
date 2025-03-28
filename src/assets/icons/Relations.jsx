import React from 'react'

const Relations = ({ styles = ''}) => {
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
        className={`icon icon-tabler icons-tabler-outline icon-tabler-circles-relation ${styles}`}
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M9.183 6.117a6 6 0 1 0 4.511 3.986" />
        <path d="M14.813 17.883a6 6 0 1 0 -4.496 -3.954" />
    </svg>
  )
}

export default Relations
