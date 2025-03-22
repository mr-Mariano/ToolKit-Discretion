import React from 'react'

const Footer = () => {

  const currentYear = new Date().getFullYear()

    return (
      <footer className="mx-auto w-1/2 mt-11">
        <div className="w-full mx-auto max-w-screen-xl p-4 text-center">
          <span className="text-xs md:text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {currentYear} <a href="https://flowbite.com/" className="hover:underline">discretion™</a>
          </span>
        </div>
      </footer>
    )
}

export default Footer
