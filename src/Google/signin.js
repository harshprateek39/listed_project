import React, { useEffect } from 'react'
import {auth, provider} from './config'
import { signInWithPopup } from 'firebase/auth'
import Home from '../Home';
const signin = () => {
    const [value, setValue] = useState('')
    const handleClick = () => {
        signInWithPopup(auth, provider).then ((result) => {
            setValue(result.user.email)
            localStorage.setItem('email', result.user.email)
        })
    }

    useEffect(() => {
        setValue(localStorage.getItem('email'))
    })
  return (
    <div>
        {value ? <Home/> :
        <button onClick={handleClick}>Sign in with Google</button>  
        }

    </div>
  )
}

export default signin