// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

const UsernameForm = ({onSubmitUsername}) => {
  const [inputValue, setInputValue] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(inputValue)
  }

  function handleChange(event) {
    const {value} = event.target
    setInputValue(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          type="text"
          value={inputValue}
          id="usernameInput"
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
