import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800g">
      <div className="flex items-center text-white p-0 mr-0 0 0 0">
        {props.userName && <img className="w-12 mx-2" src={props.user.avatar_url} alt="avatar" />}
        {props.userName && <span className="text-xl mx-2">{props.user.login}</span>}
      </div>
      <div className="text-white">
        {props.userName && (
          <Link to="/">
            {' '}
            <span> Main </span>{' '}
          </Link>
        )}
        {props.readme && <Link to={`/${props.userName}`}> Repositories </Link>}
      </div>
    </nav>
  )
}

export default Header
