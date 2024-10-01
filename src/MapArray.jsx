import React, { useState } from 'react'

const MapArray = () => {
  const [users, setUsers] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const updateUsers = () => {
    // ["Alice", "Bob", "Charlie", "Alice"]
    setUsers(["Alice", "Bob", "Charlie", "Alice"])
  }

  const sortUsers = () => {
    const sortedUsers = [...users].sort((a, b) => a.localeCompare(b));
    setUsers(sortedUsers)
  }

  const handleLoginClick = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <div>
      <ul>
        {users.map((user, index) => 
          <li key={index}>{user}</li>
        )}
      </ul>

      <button onClick={updateUsers}>Load Users</button>
      <button onClick={sortUsers}>Sort Users</button>

      <p>
        {isLoggedIn ? 'Hello you are logged in' : 'you need to login'}
      </p>

      <button onClick={handleLoginClick}>
        {isLoggedIn ? 'Logout' : 'you need to login'}
      </button>

    </div>
  )
}

export default MapArray