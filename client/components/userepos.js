import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HashLoader from 'react-spinners/HashLoader'
import Head from './head'
import Footer from './footer'

const RepoList = (props) => {
  const [search, setSearch] = useState('')
  const handelChange = (e) => {
    setSearch(e.target.value)
  }
  const filterList = props.repos.filter((el) => el.name.includes(search))
  return (
    <div className=" flex flex-col w-150">
      <Head title="Repositories" />
      <div className="max-w-xl mt-6 mb-12 border-b border-b-2 border-gray-800 py-1 ml-48">
        <input
          className="appearance-none bg-transparent border-none w-200 text-gray-700 mr-3 p-auto leading-tight focus:outline-none"
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handelChange}
        />
      </div>
      <table className="min-w-full">
        <thead>
          <tr className="px-4 py-4 border-b border-gray-300 bg-gray-300">
            <th className="px-6 py-5 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-4 py-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Deployment
            </th>
            <th className="px-4 py-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Last Commit
            </th>
            <th className="px-4 py-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Readme
            </th>
          </tr>
        </thead>
        <tbody>
          {filterList.map((el) => (
            <tr>
              <td className="px-6 py-3 whitespace-no-wrap border-b border-gray-200">{el.name}</td>
              <td className="px-6 py-3 whitespace-no-wrap border-b border-gray-200">
                <a
                  className={`${
                    el.homepage ? 'text-green-500' : 'text-red-500'
                  } px-2 inline-flex text-xs leading-5 font-semibold rounded-full`}
                  href={el.homepage ? el.homepage : undefined}
                >
                  Go
                </a>
              </td>
              <td className="px-6 py-3 whitespace-no-wrap border-b border-gray-200">
                {new Date(el.updated_at).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <Link to={`/${props.userName}/${el.name}`}>View Readme</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {!props.repos.length && (
        <div className="flex justify-center items-center mt-40">
          <HashLoader color="#4a5568" />
        </div>
      )}
      <Footer />
    </div>
  )
}

RepoList.propTypes = {}
export default RepoList
