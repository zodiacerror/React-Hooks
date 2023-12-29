import React, { useState } from 'react'

const UseStateHook = () => {
    const [name, setName] = useState('')
  return (
    <div>
        <input type="text" onChange={(event) => setName(event.target.value)}/>
        {name}
    </div>
  )
}

export default UseStateHook