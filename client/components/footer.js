import React from 'react'

const Footer = () => {
  return (
    <footer className="flex justify-center px-4 text-gray-100 bg-gray-800 h-200">
      <div className="container py-6">
        <h1 className="text-center text-lg font-bold lg:text-xl">Please, Stay In Touch.</h1>
        <hr className="h-px mt-6 bg-gray-700 border-none" />
        <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
          <div>
            <a href="#" className="text-xl font-bold">
              Go Up
            </a>
          </div>
          <div className="flex mt-4 md:m-0">
            <div className="-mx-4">
              <a href="https://linkedin.com/in/meerimabdinazarova" className="px-4 text-sm">
                LinkedIn
              </a>
              <a href="https://github.com/ThisIsMeka" className="px-4 text-sm">
                GitHub
              </a>
              <a href="https://twitter.com/IamMeerim" className="px-4 text-sm">
                Tweeter
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
