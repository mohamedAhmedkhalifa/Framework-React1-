import React from 'react'
import img from '../../Assets/Images/avataaars.svg'

export default function Home() {
    return <>
    <div className="home">
        <div className="container">
            <div className="row">
                <img src={img} alt="" />
                <h2 className='pt-5'>START FRAMEWORK</h2>
                <div className="line">
                    <div className="after1 me-3">

                    </div>
                    <div className='star'>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div className="before1 ms-3">

                    </div>
                </div>
                <p className='text-center pt-3 text-light'>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </div>
    </div>
    </>
}
