import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-2 ">
      <div className="flex items-center text-white p-0 m-0">
        {props.userName && (
          <img className="w-16 h-16 rounded mr-10" src={props.user.avatar_url} alt="avatar" />
        )}
        {props.userName && (
          <span className="text-xl text-white uppercase ">{props.user.login}</span>
        )}
      </div>
      <div className="text-white ">
        {props.userName && (
          <Link className="mx-10" to="/">
            {' '}
            <span> Main </span>{' '}
          </Link>
        )}
        {props.readme && (
          <Link className="mr-10" to={`/${props.userName}`}>
            {' '}
            Repositories{' '}
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Header
