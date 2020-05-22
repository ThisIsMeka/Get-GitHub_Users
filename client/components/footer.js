import React from 'react'

const Footer = () => {
  return (
    <footer className="flex bg-gray-800 justify-around bg-gray-800 p-6">
      <div className="flex items-center text-white justify-between md:flex-row">
        <div className="flex md:m-0 items-center ">
          <div className="-mx-4 ">
            <a href="https://linkedin.com/in/meerimabdinazarova" className="px-4 text-md">
              LinkedIn
            </a>
            <a href="https://github.com/ThisIsMeka" className="px-4 text-md">
              GitHub
            </a>
            <a href="https://twitter.com/IamMeerim" className="px-4 text-md">
              Twitter
            </a>
            <a href="mailto:meerim@gmail.com" className="px-4 text-md">
              Gmail
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
