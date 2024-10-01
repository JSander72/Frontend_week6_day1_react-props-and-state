import React, { Component } from 'react'
// rcc - React Class Component 

export default class ClassState extends Component {

  constructor() {
    super(); // calls the class we are inheriting from

    // component property that stores variables 
    // this.state (this is the initial value for the property)
    this.state = {
      name: "Initial Name"
    }

    // DON'T FORGET TO BIND 
    this.changeName = this.changeName.bind(this)

  }

  changeName(){
    // this.setState is updating the previous value of state
    this.setState({name: "King Arthur"}); 
  }

  render() {

    // Accessing the value from the state (similar to event.target.elements.name)
    const name = this.state.name

    return (
      <div>
        <p>Hello {name} from a class based greeting!</p>

        {/* Also a valid way to access state */}
        <p>Hello {this.state.name} from a class based greeting!</p>

        <button onClick={this.changeName}>Change Name</button>
      </div>
    )
  }
}

// Default values for our state 
// just in case something is empty or undefined 
// ClassStateProps.defaultProps = {
//   initialName: "Default Name"
// }

// export default ClassStateProps;

 