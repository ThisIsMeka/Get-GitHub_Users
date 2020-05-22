import React, { useEffect, useState } from 'react'
import { Route, useParams } from 'react-router-dom'
import axios from 'axios'
import Header from './headers'
import RepoList from './userepos'
import Readme from './readme'
import Footer from './footer'

const Home = () => {
  const [repos, setRepos] = useState([])
  const [readme, setReadme] = useState('')
  const { userName, repoName } = useParams()
  const [user, setUser] = useState({})
  const [commit, setCommit] = useState({})

  useEffect(() => {
    if (userName !== undefined) {
      axios.get(`https://api.github.com/users/${userName}/repos `).then(({ data }) => {
        setRepos(data)
      })
    }
  }, [userName])
  useEffect(() => {
    if (repoName !== undefined) {
      const headers = { Accept: 'application/vnd.github.VERSION.raw' }
      axios(`https://api.github.com/repos/${userName}/${repoName}/readme`, {
        param: {},
        headers
      }).then(({ data }) => setReadme(data))
    }
  }, [repoName, userName])
  useEffect(() => {
    axios(`https://api.github.com/users/${userName}`).then(({ data }) => setUser(data))
  }, [userName])
  useEffect(() => {
    axios(`https://api.github.com/users/${userName}`).then(({ data }) => setCommit(data))
  }, [userName])
  return (
    <div>
      <Header userName={userName} repos={repos} reponame={repoName} readme={readme} user={user} />
      <div className="container page-wrap mx-auto pt-3 pb-20">
        <Route
          exact
          path="/:userName"
          component={() => (
            <RepoList userName={userName} repoName={repoName} repos={repos} commit={commit} />
          )}
        />
        <Route exact path="/:userName/:repoName" component={() => <Readme readme={readme} />} />
      </div>
      <Footer />
    </div>
  )
}

Home.propTypes = {}

export default Home
