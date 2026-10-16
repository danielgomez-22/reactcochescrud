import React, { Component } from 'react'
import elbicho from './../assets/images/elbicho.jpg'

export default class HomeComponent extends Component {
  render() {
    return (
      <div>
        <img src={elbicho} alt="El Bicho" />
      </div>
    )
  }
}
