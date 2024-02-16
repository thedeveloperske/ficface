import React from 'react';

const login = () => {
  return (
    <div className='flex flex-row'>
      <h2>Login</h2>
      <div className='grid col-12'>
        <form>
        <div className='flex flex-col'>
            <label>Email</label>
            <input className='form-control' type='email' name='email' required/>
        </div>
        </form>
     </div>
    </div>
  )
}

export default login
