import React from 'react'

const CTA = ({text}) => {
    return (
        <button className="cta" text={text}>
            <h5>{text}</h5>
        </button>
    )
}

export default CTA
