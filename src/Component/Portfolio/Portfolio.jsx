import React from 'react'
import img1 from '../../Assets/Images/poert1.png'
import img2 from '../../Assets/Images/port2.png'
import img3 from '../../Assets/Images/port3.png'

export default function Portfolio() {
    return <>
    <div className="portfolio">
    <h2>PORTFOLIO COMPONENT</h2>
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
            <div className="row g-5">
                <div className="col-md-4">
                    <div className="card" data-bs-toggle= "modal" data-bs-target = "#imageExample">
                        <img src={img1} alt="" />
                            <div className='modal fade' id='imageExample' tobIndex = "-1"  aria-hidden = "true">
                                <div className='modal-dialog '>
                                    <div className="modal-content ">
                                        <div className="modal-body d-flex justify-content-center align-items-center">
                                            <img src= {img1} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div className="layer">
                            <i class=" fa-solid fa-plus fa-5x text-light"></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" data-bs-toggle= "modal" data-bs-target = "#imageExample2">
                        <img src={img2} alt="" />
                            <div className='modal fade' id='imageExample2' tobIndex = "-1"  aria-hidden = "true">
                                <div className='modal-dialog '>
                                    <div className="modal-content">
                                        <div className="modal-body d-flex justify-content-center align-items-center">
                                            <img src= {img2} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div className="layer">
                            <i class=" fa-solid fa-plus fa-5x text-light"></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" data-bs-toggle= "modal" data-bs-target = "#imageExample3">
                        <img src={img3} alt="" />
                            <div className='modal fade' id='imageExample3' tobIndex = "-1"  aria-hidden = "true">
                                <div className='modal-dialog'>
                                    <div className="modal-content">
                                        <div className="modal-body d-flex justify-content-center align-items-center">
                                            <img src= {img3} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div className="layer">
                            <i class=" fa-solid fa-plus fa-5x text-light"></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" data-bs-toggle= "modal" data-bs-target = "#imageExample">
                        <img src={img1} alt="" />
                            <div className='modal fade' id='imageExample' tobIndex = "-1"  aria-hidden = "true">
                                <div className='modal-dialog'>
                                    <div className="modal-content">
                                        <div className="modal-body d-flex justify-content-center align-items-center">
                                            <img src= {img1} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div className="layer">
                            <i class=" fa-solid fa-plus fa-5x text-light"></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" data-bs-toggle= "modal" data-bs-target = "#imageExample2">
                        <img src={img2} alt="" />
                            <div className='modal fade' id='imageExample2' tobIndex = "-1"  aria-hidden = "true">
                                <div className='modal-dialog'>
                                    <div className="modal-content">
                                        <div className="modal-body d-flex justify-content-center align-items-center">
                                            <img src= {img2} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div className="layer">
                            <i class=" fa-solid fa-plus fa-5x text-light"></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card" data-bs-toggle= "modal" data-bs-target = "#imageExample3">
                        <img src={img3} alt="" />
                            <div className='modal fade' id='imageExample3' tobIndex = "-1"  aria-hidden = "true">
                                <div className='modal-dialog'>
                                    <div className="modal-content">
                                        <div className="modal-body d-flex justify-content-center align-items-center">
                                            <img src= {img3} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div className="layer">
                            <i class=" fa-solid fa-plus fa-5x text-light"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}
