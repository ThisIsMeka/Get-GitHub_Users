import React, { useState } from 'react'
import Head from './head'
import { history } from '../redux'

const Dummy = () => {
  const [value, setValue] = useState('')
  const changeInput = (e) => {
    const newValue = e.target.value
    setValue(newValue)
  }
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      history.push(`/${value}`)
    }
  }
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-gray-800 text-white font-bold rounded-lg border shadow-lg p-8">
          <img
            className="mx-auto h-16 w-16 mb-4"
            src="https://github.githubassets.com/favicons/favicon-dark.svg"
            alt="Logo"
          />
          <input
            type="text"
            placeholder="Enter username"
            className="bg-gray-100 appearance-none border-4 border-gray-200 rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-600"
            value={value}
            onChange={changeInput}
            onKeyDown={handleKeyPress}
          />
          <button
            className="bg-gray-600 ml-4 border-white text-sm border-4 text-white py-1 px-1 rounded"
            type="button"
            onClick={() => {
              history.push(`/${value}`)
            }}
          >
            View Repositories
          </button>
        </div>
      </div>
    </div>
  )
}
export default Dummy
