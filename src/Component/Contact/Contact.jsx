import React from 'react'

export default function Contact() {
    return <>
    <div className="contact">
    <h2>CONATCT SECTION</h2>
                <div className="line">
                    <div className="after me-3">

                    </div>
                    <div className='star'>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div className="before ms-3">

                    </div>
                </div>
        <div className="container py-5">
            <div className="row g-5 pt-5">
                <form action="" className='w-50 m-auto myForm py-5' >
                    <input className='w-100 p-2 mb-4' type="text" placeholder='userName' />
                    <input className='w-100 p-2 mb-4' type="text" placeholder='userAge'/>
                    <input className='w-100 p-2 mb-4' type="email" placeholder='userEmail'/>
                    <input className='w-100 p-2 mb-4' type="password" placeholder='userPassword'/>
                    <button>Send Message</button>
                </form>
            </div>
        </div>
    </div>
    </>
}
