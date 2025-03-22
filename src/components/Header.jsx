import React from 'react'

const Header = () => {
  return (
    <div className='
      flex flex-col text-start
      w-full md:w-1/2 px-4 py-8
      gap-2
      dark:border-gray-700
    '>

        <h1 className="
          text-4xl md:text-2xl lg:text-3xl font-extrabold leading-8 mb-2
          tracking-tight
          text-gray-900
          dark:text-white
        ">
          Precision made simple with the <span className="text-blue-600 dark:text-blue-500">
            Discretion Toolkit
          </span>.
        </h1>
        <p className="text-sm lg:text-md font-normal text-gray-500 dark:text-gray-400">
          A collection of tools and resources to help you understand and apply the concepts of Discrete Mathematics.
        </p>

        <div className="text-xs md:text-sm lg:md font-normal">
          <p>Teacher: Fernando Velasco Loera</p>
          <p>Course: Logic and Discrete Structures</p>
          <p>Semester: Spring 2025</p>
        </div>

      </div>
  )
}

export default Header
