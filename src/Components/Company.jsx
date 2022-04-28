import React from 'react'
import logo from "../images/logo/logo.png"

const Company = () => {
    return (
        <>
            <div className='row myborder'>
                <div className="col-5 px-5 mx-auto">
                    <img src={logo} width="100px" height="100px" />
                </div>
                <div className="col-5 mx-auto py-auto">
                    <div className="container-md">
                        <a className="navbar-brand tc fs-1 display-1 text-danger" href="#">My Restaurant</a>
                        <p><em>Food is an important part of a balanced diet</em></p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Company