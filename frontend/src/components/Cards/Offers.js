import React from "react";
import { Link } from "react-router-dom";
const Offers = ({ title, img, imgWidth, imgHeight, url }) => {
  return (
    <div className='offers text-left mx-3'>
        <div className="container px-0 pb-4">
        <img
        src={img}
        alt={title}
        className='img-fluid'
        style={{ maxHeight: `${imgHeight}` }}
      />

      <div className='row pl-3 pt-4'>
        <h2 className="ml-3">{title}</h2>
      </div>
      <div className='row pr-5 mt-1'>
        <Link className="ml-auto" to={url}><span>More</span></Link>
      </div>
        </div>
      
    </div>
  );
};

export default Offers;
