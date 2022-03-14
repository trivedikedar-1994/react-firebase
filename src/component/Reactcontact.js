import React, { useState } from 'react';
import './Contact.css';

const Reactcontact = () => {

    const [user, setUser] = useState({
        name : "",
        email : "",
        phone : "",
        address : "",
        message : "",
    });

    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUser({...user, [name]: value })
    };
    
    const postData = async (e) => {
        e.preventDefault();

        const { name, email, phone, address, message } = user;

        if( name && email && phone && address && message ) {
            const res = await fetch("https://reactfirebase-f6756-default-rtdb.firebaseio.com/reactcontact.json", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    address, 
                    message,
                }),
            });
            if (res) {
                setUser({
                    name : "",
                    email : "",
                    phone : "",
                    address : "",
                    message : "",
                });
                alert("Data Store");
            } 
        } else {
            alert("Please Fill All the Data");
        }
    };

    return (
        <>
            <div className="container h-100">
                <div className="row h-100 align-items-center justify-content-center">
                    <div className="col-md-7 my-2 mx-auto">
                        <form method='POST'>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className='mb-3 form-group '>
                                        <label htmlFor="userName" className='form-label'>Name</label>
                                        <input type="text" id="userName" className='form-control' name='name' value={user.name} onChange={getUserData} placeholder='Enter Your Name' autoComplete='off' required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='mb-3 form-group'>
                                        <label htmlFor="userEmail" className='form-label'>E-mail</label>
                                        <input type="text" id="userEmail" className='form-control' name='email' value={user.email} onChange={getUserData} placeholder='Enter Your Email Address' autoComplete='off' required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='mb-3 form-group'>
                                        <label htmlFor="userPhone" className='form-label'>Mobile Number</label>
                                        <input type="text" id="userPhone" className='form-control' name='phone' value={user.phone} onChange={getUserData} placeholder='Enter Your Phone Number' autoComplete='off' required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='mb-3 form-group'>
                                        <label htmlFor="userAddress" className='form-label'>Address</label>
                                        <input type="text" id="userAddress" className='form-control' name='address' value={user.address} onChange={getUserData} placeholder='Enter Your Address' autoComplete='off' required />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className='mb-3 form-group'>
                                        <label htmlFor="userMessage" className='form-label'>Message</label>
                                        <textarea className='form-control' id="userMessage" name='message' value={user.message} onChange={getUserData} placeholder='Enter Your Message' autoComplete='off' required />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <button type="submit" onClick={postData} className='btn btn-primary'>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reactcontact