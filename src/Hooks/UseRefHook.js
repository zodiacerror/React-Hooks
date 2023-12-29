import React, { useRef, useState } from 'react'

const UseRefHook = () => {

    const inpRef = useRef()
    const [name, setName] = useState('')
    


  return (
    <div>
        <input type='text' ref={inpRef} onChange={() => setName(inpRef.current.value)} />
        {
            console.log(name)
        }
    </div>
  )
}

export default UseRefHook