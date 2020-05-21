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
      <div className="main-bg flex justify-center items-center h-screen pb-20">
        <div className="bg-gray-800 text-white font-bold rounded-lg border shadow-lg py-10 px-16">
          <img
            className="mx-auto h-16 w-16 mb-4"
            src="https://github.githubassets.com/favicons/favicon-dark.svg"
            alt="Logo"
          />
          <h2 className="mt-6 mb-6 text-center text-3xl leading-9 font-extrabold text-white">
            Users repository search
          </h2>
          <form>
            <input
              type="text"
              placeholder="Enter username"
              className="bg-white-800 appearance-none border-4 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-600"
              value={value}
              onChange={changeInput}
              onKeyDown={handleKeyPress}
            />
            <button
              className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 ml-6 rounded"
              type="button"
              onClick={() => {
                history.push(`/${value}`)
              }}
            >
              View Repositories
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Dummy
