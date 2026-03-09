import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Sign_Up = () => {
   
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [pass, setpass] = useState('')
    const [cpass, setcpass] = useState('')
    const [num, setnum] = useState('')
    const [dob, setdob] = useState('')


   function My_Input()
   {
    if(name=='' ||email=='' || pass=='' || cpass=='' || num=='' || dob=='' )
    {
        alert('Plz Provide all the information.')
    }
    else
    {
       if(pass!==cpass)
        {
            alert('Mismatch Password.')
        } 
        else
        {
            console.log(num.length)
            if((num.length !== 10))
            {
                alert("Plz provide Valied 10 Digits Number.")
            }
            else{

                if(email.includes('@gmail.com')==false)
                {
                   alert('Plz Provide a Correct Email address.')
                }
                else{
                    setname('')
                    setemail('')
                    setpass('')
                    setnum('')
                    setdob('')
                    console.log(name,email,pass,cpass,num,dob)
                    alert('Sign Up succesful')
                }
            }
            
        }
    }
   }
  return (
    <div className='Form'>
        <div className='Inside_form'>
            <div>
                <h2>Sign Up</h2><br />
                <p>Sign Up to Continue...</p>
            </div>
            <div className='Input'>
                <input onChange={(e)=>{setname(e.target.value.toUpperCase())}} value={name} type="text" placeholder='Full Name' required />
                <input onChange={(e)=>{setemail(e.target.value)}} value={email} type="email" placeholder='Email' required />
                <input onChange={(e)=>{setpass(e.target.value)}} value={pass} type="password" placeholder='Password' required/>
                <input onChange={(e)=>{setcpass(e.target.value)}} value={cpass} type="password" placeholder='Conform Password' required />
                <input onChange={(e)=>{setnum(e.target.value)}} value={num} type="number" placeholder='Number' required />
                <input onChange={(e)=>{setdob(e.target.value)}} value={dob} type="date" name='Date-of-Birth' required/>
                <button onClick={My_Input}>Register</button>
                <div>Already Have an Account,<Link to="/">Sign In</Link></div>
            </div>
        </div>
    </div>
  )
}
export default Sign_Up