import React from 'react'
import HashLoader from 'react-spinners/HashLoader'
import Markdown from 'markdown-to-jsx'
import '../assets/scss/markdown.scss'

const Readme = (props) => {
  return (
    <div>
      <div className="markdown-body">
        <Markdown>{props.readme}</Markdown>
      </div>
      {!props.readme.length && (
        <div className="flex justify-center items-center mt-40">
          <HashLoader className=" color-#4a5568" />
        </div>
      )}
    </div>
  )
}

Readme.propTypes = {}

export default Readme
