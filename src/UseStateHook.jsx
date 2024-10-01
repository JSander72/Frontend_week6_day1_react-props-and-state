import React, { useState } from 'react'
// rafce 

// Functional components are stateless components 
// UNLESS we use the 'useState' hook -> allows us to add state to functional components 
const UseStateHook = () => {
  // [the current state value, the function to update the state]
  // this.state (the name of the variable)
  // this.setState (set[name of the variable])

  const originalName = "Spiderman"
  const [name, setName] = useState("Spiderman")
  const [change, setChange] = useState(true); 

  const changeName = () => {
    // setName("Venom")
    // if (change){
    //   setName("Venom")
    //   setChange(false)
    // } else {
    //   setName("Doctor Octopus")
    //   setChange(true)
    // }

    // Ternary Operator Method 
    // change true? 
    // if so setName to Venon 
    // : (otherwise) setName to False 
    check ? setName("Venom") : setName("Doctor Octopus")
    setChange(!change)
  }

  return (
    <div>
      <p>Why hello {name}, this is a functional component</p>
      <button onClick={changeName}>Change Name</button>
    </div>
  )
}

export default UseStateHook