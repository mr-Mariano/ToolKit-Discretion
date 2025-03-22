import React from 'react'

const Sets = ({ styles = ''}) => {
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
        className={`icon icon-tabler icons-tabler-outline icon-tabler-parentheses ${styles}`}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M7 4a12.25 12.25 0 0 0 0 16" />
            <path d="M17 4a12.25 12.25 0 0 1 0 16" />
    </svg>
  )
}

export default Sets
