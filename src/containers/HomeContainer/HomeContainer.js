import React, { Component } from 'react'

import Home from '../../components/Home'

class HomeContainer extends Component {

  componentDidMount() {
    console.log('Mounted')
  }

  render() {
    return (
      <Home />
    )
  }
}

export default HomeContainer