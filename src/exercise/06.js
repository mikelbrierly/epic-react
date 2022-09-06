// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {useRef} from 'react'

const UsernameForm = ({onSubmitUsername}) => {
  const usernameInputRef = useRef(null)
  const [error, setError] = React.useState(null)

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(usernameInputRef.current.value)
  }

  function handleChange(event) {
    const {value} = event.target
    const isLowercase = text => text === text.toLowerCase()
    if (!isLowercase(value)) {
      return setError(`${value} is not a valid username`)
    }
    setError(null)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          type="text"
          id="usernameInput"
          ref={usernameInputRef}
          onChange={handleChange}
        />
        <span role="alert" style={{display: 'block', color: 'red'}}>
          {error}
        </span>
      </div>
      <button type="submit" disabled={!!error}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
