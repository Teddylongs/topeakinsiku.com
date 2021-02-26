import React from 'react'
import { CTA } from './Buttons'

const Subscribe = ({img, title}) => {
    return (
        <div className="subscribe bg-p-pink" >
            <div className="container py-5">
                <div className="row justify-content-center py-3">
                    <img src={img} alt={title} />
                </div>
                <div className="row justify-content-center py-3">
                   <CTA text="Subscribe" />
                </div>
            </div>
        </div>
    )
}

export default Subscribe
