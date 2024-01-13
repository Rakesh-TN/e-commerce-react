import React from 'react'

function Searchbar() {
  return (
    <section>
        <div className='d-flex flex-column justify-content-center align-items-center min-vh-100'>
            <div className='d-flex col-10 col-md-8 '>
                <input type="text" className='form-control inputStyle'/>
                <button className='btn btn-primary ms-2'>Search</button>
            </div>
        </div>
    </section>
  )
}

export default Searchbar