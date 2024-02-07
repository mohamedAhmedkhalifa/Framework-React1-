import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
    return <>
    <div className={`${style.footer} footer`}>
        <div className={`${style.text} text`}>
            <div className="row">
                <div className="col-md-4">
                    <div className={`${style.item} item`}>
                        <h3 className='mb-2 pt-3'>LOCATION</h3>
                        <p className='mb-3'>2215 John Daniel Drive</p>
                        <p className='mb-3'>Clark, MO 65243</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className={`${style.item} item`}>
                        <h3 className='mb-2 pt-3'>AROUND THE WEB</h3>
                        <div className={`${style.icons} icons`}>
                            <div className={`${style.icon} icon`}>
                                <i className={`${style.icon1} icon1 fa-brands fa-facebook`}></i>
                            </div>
                            <div className={`${style.icon} icon`}>
                                <i className={`${style.icon1} icon1 fa-brands fa-twitter`}></i>
                            </div>
                            <div className={`${style.icon} icon`}>
                                <i className={`${style.icon1} icon1 fa-brands fa-linkedin-in`}></i>
                            </div>
                            <div className={`${style.icon} icon`}>
                                <i className={`${style.icon1} icon1 fa-solid fa-globe`}></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className={`${style.item} item`}>
                        <h3 className='mb-2 pt-3'>ABOUT FREELANCER</h3>
                        <p className='mb-3'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${style.endFooter} endFooter`}>
            <p className='mb-3 pt-2'>Copyright © Your Website 2021</p>
        </div>
    </div>
    </>
}