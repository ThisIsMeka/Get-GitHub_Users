import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800">
      <div className="flex items-center text-white mr-10">
        {props.userName && (
          <img
            className=" w-16 h-16 rounded mx-10 border-2 border-white hover:border-transparent "
            src={props.user.avatar_url}
            alt="avatar"
          />
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
