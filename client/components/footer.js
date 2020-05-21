import React from 'react'

const Footer = () => {
  return (
    <footer className="flex justify-center bg-gray-800 absolute bottom-0 left-0 right-0 p-6">
      <div className="container py-0">
        <div className="flex flex-col items-center text-white justify-between md:flex-row">
          <div>
            <a href="#" className="text-xl font-bold">
              Go Up
            </a>
          </div>
          <div className="flex md:m-0">
            <div className="-mx-4">
              <a href="https://linkedin.com/in/meerimabdinazarova" className="px-4 text-sm">
                LinkedIn
              </a>
              <a href="https://github.com/ThisIsMeka" className="px-4 text-sm">
                GitHub
              </a>
              <a href="https://twitter.com/IamMeerim" className="px-4 text-sm">
                Twitter
              </a>
              <a href="mailto:meerim@gmail.com" className="text-xl font-bold">
                Click Here To Email Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
