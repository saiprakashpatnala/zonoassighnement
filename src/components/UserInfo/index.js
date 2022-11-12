import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

class UserInfo extends Component {
  state = {name: '', email: '', phoneNumber: '', userArray: []}

  submitForm = event => {
    event.preventDefault()
    const {name, email, phoneNumber} = this.state
    const newPerson = {
      id: uuidv4(),
      name,
      email,
      phoneNumber,
    }
    this.setState(prevState => ({
      userArray: [...prevState.userArray, newPerson],
      name: '',
      email: '',
      phoneNumber: '',
    }))
  }

  enterName = event => {
    this.setState({name: event.target.value})
  }

  enterEmail = event => {
    this.setState({email: event.target.value})
  }

  enterPhoneNumber = event => {
    this.setState({phoneNumber: event.target.value})
  }

  render() {
    const {name, email, phoneNumber, userArray} = this.state
    if (userArray.length > 0) {
      console.log(userArray)
    }
    return (
      <div>
        <form onSubmit={this.submitForm} className="form-el">
          <input
            className="input-element"
            onChange={this.enterName}
            type="text"
            value={name}
            placeholder="Enter Name"
            required
          />
          <input
            onChange={this.enterEmail}
            type="email"
            value={email}
            required
            className="input-element"
            placeholder="Enter Email"
          />
          <input
            onChange={this.enterPhoneNumber}
            type="tel"
            value={phoneNumber}
            required
            className="input-element"
            placeholder="Enter Mobile Number"
          />
          <button className="check-out-button" type="submit">
            Checkout
          </button>
        </form>
      </div>
    )
  }
}

export default UserInfo
