import React, { Component } from 'react'
import Router from 'next/router'

class Home extends Component {
  componentDidMount() {
    Router.replace('/register/personal-info')
  }

  render() {
    return <span>Redirecionando...</span>
  }
}

export default Home
