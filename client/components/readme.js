import React from 'react'
import Markdown from 'markdown-to-jsx'
import '../assets/scss/markdown.scss'

const Readme = (props) => {
  return (
    <div className="markdown-body">
      <Markdown>{props.readme}</Markdown>
    </div>
  )
}

Readme.propTypes = {}

export default Readme
