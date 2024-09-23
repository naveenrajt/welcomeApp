// Write your code here
import {Component} from 'react'

import './index.css'

class WelcomeApp extends Component {
  state = {isClicked: true}

  textChange = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked} = this.state
    const butonText = isClicked ? 'Subscribe' : 'Subscribed'
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learning</p>
        <button type="button" className="button" onClick={this.textChange}>
          {butonText}
        </button>
      </div>
    )
  }
}

export default WelcomeApp
