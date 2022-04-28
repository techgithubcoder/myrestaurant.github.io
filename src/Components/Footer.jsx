import React from 'react'
import whatsapp from "../images/logo/whatsapp.png"
import instagram from "../images/logo/instagram.png"
import twitter from "../images/logo/twitter.png"


const Footer = () => {
    return (
        <div className='myborder my-2'>
            <div className='row p-5'>
                <div className='col-3'>
                    <h2 className='display-6'>Our Services</h2>
                    <ul>
                        <li><small className="text-muted">Home Delivery</small><br/></li>
                        <li><small className="text-muted">Lounge Service</small><br/></li>
                        <li><small className="text-muted">Room Service</small><br/></li>
                        <li><small className="text-muted">Cafeteria Service</small><br/></li>
                    </ul>
                </div>
                <div className='col-3'>
                    <h2 className='display-6'>About us</h2>
                    <p className='text-muted'>Organizer, Craig Stephen, opened the first ‘Organization Name’ Restaurant in Los Alamitos, California on September 27, 1977. Today, there are 37 areas all through Arizona, California, Illinois, Louisiana, Nevada, Oregon, Tennessee, and Washington.</p>
                </div>
                <div className='col-3'>
                    <h2 className='display-6'>Our Office</h2>
                    <small className="text-muted">C20, New Ashok Nagar,</small><br/>
                    <small className="text-muted">New Delhi 110096</small><br/>                    
                </div>
                <div className='col-3 text-muted'>
                    <h2 className='display-6'>Follow us</h2>
                    <div className='py-1'><img src={whatsapp} width="30px"/><span> +91 9999743709</span><br/></div>
                    <div className='py-1'><img src={instagram} width="30px"/><span> shakti.aryan_</span><br/></div>
                    <div className='py-1'><img src={twitter} width="30px"/><span> Not Available</span><br/></div>
                    
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Footer