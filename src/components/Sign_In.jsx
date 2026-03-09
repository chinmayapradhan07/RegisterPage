import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Sign_In = () => {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")

    function Login()
    {
        if(name=='' ||email=='' || pass=='' )
        {
            alert('Invalide Details')
        }
        else{
        setname('')
        setemail('')
        setpass('')
        }
    }

  return (
    <div className='Form'>
        <div className='Inside_form'>
            <div>
                <h2>Sign In</h2><br />
                <p>welcom Again..</p>
            </div>
            <div className='Input'>
                <input spellCheck="false" onChange={(e)=>{setname(e.target.value.toUpperCase())}} value={name} type="text" placeholder='Full Name' required />
                <input spellCheck="false" onChange={(e)=>{setemail(e.target.value)}} value={email} type="email" placeholder='Email' required />
                <input onChange={(e)=>{setpass(e.target.value)}} value={pass} type="password" placeholder='Password' required/>
                <button onClick={Login}>Sign In</button>
                <div>Don't Have an Account,<Link to="/sign_Up">Sign Up</Link></div>
            </div>
        </div>
    </div>
  )
}
export default Sign_In