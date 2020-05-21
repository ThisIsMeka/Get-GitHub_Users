import React from 'react'
import HashLoader from 'react-spinners/HashLoader'
import Markdown from 'markdown-to-jsx'
import '../assets/scss/markdown.scss'
import Footer from './footer'

const Readme = (props) => {
  return (
    <div className="markdown-body">
      <Markdown>{props.readme}</Markdown>
      <HashLoader color="flex justify-center items-center mt-40" />
      <Footer className="text-white" />
    </div>
  )
}

Readme.propTypes = {}

export default Readme
