import React from 'react'

const Header = () => {
  return (
    <div className='
      w-full md:w-1/2
      px-2 py-8
      text-center md:text-left>
    '>

        <h1 className="
          text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4
          tracking-tight
          text-gray-900
          dark:text-white
        ">
          Precision made simple with the <span className="text-blue-600 dark:text-blue-500">
            Discretion Toolkit
          </span>.
        </h1>
        <p className="text-sm md:text-md lg:text-lg font-normal text-gray-500 dark:text-gray-400">
          A collection of tools and resources to help you understand and apply the concepts of Discrete Mathematics.
        </p>

        <div className="text-xs md:text-sm lg:text-md font-normal">
          <p>Teacher: Fernando Velasco Loera</p>
          <p>Course: Logic and Discrete Structures</p>
          <p>Semester: Spring 2025</p>
        </div>

      </div>
  )
}

export default Header
