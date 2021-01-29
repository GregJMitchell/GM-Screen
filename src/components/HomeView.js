import React from 'react'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

class HomeView extends React.Component {
  componentDidMount() {
    if (cookies.get("user")) {
      this.redirect()
    }
    else {
      this.render()
    }
  }

  redirect = () => {
    this.props.history.push('/campaigns')
  }

  render () {
    return (
      <p>Hello</p>
    )
  }
}

export default HomeView