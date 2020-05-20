import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const RepoList = (props) => {
  return (
    <div className=" flex flex-col width mx-auto  items-center">
      <Head title="Repositories" />
      <table className="min-w-auto">
        <thead>
          <tr className="px-6 py- border-b border-gray-300 bg-gray-300">
            <th className="px-6 py-5 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-5 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Deployment
            </th>
            <th className="px-6 py-5 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Last Commit
            </th>
            <th className="px-6 py-5 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Readme
            </th>
          </tr>
        </thead>
        <tbody>
          {props.repos.map((el) => (
            <tr className="bg-gray-100">
              <td className="px-6 py-3 whitespace-no-wrap border-b border-gray-200">{el.name}</td>
              <td className="px-6 py-3 whitespace-no-wrap border-b border-gray-200">
                <a
                  href={`https://github.com/${props.userName}/${el.name}`}
                  className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                >
                  Go
                </a>
              </td>
              <td className="px-6 py-3 whitespace-no-wrap border-b border-gray-200">
                <a href={`https://github.com/${props.userName}/${el.name}/commit/`}>Last Commit</a>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <Link to={`/${props.userName}/${el.name}`}>View Readme</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

RepoList.propTypes = {}
export default RepoList
