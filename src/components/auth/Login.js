import React from 'react';

const Login = () => {
  return (
    <div className='flex flex-row'>
      <h2>Login. Fill in the details to login</h2>
      <div className='grid col-12'>
        <form>
        <div className='flex flex-col'>
            <label>Email</label>
            <input className='form-control' type='email' name='email' required/>
        </div>
            <div className='flex flex-col'>
            <label>Password</label>
            <input className='form-control' type='password' name='password' required/>
        </div>
        </form>
     </div>
    </div>
  )
}

export default Login
