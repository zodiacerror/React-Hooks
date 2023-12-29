import { useEffect, useLayoutEffect, useState } from "react";
const Home = () => {
    const [name, setName] = useState('')
    useEffect(() => {
        setName('Welcome Zodiac')
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

export default Home