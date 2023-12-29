import React, { useEffect, useLayoutEffect, useState } from 'react'

const UseEffectHook = () => {
    const [name, setName] = useState('')

    useEffect(() => {
        setName('hello')
    },[])

    useLayoutEffect(() => {
        setName('hi')
    },[])



  return (
    <div>

    {
        name
    }
    </div>
  )
}

export default UseEffectHook