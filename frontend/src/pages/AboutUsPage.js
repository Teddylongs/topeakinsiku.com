import React from "react";
import Subscribe from "../components/Subscribe";
// import {AboutHero} from "../assets/images"
import {

  Subscribe as SubscribeTitle
} from "../assets/images";
const AboutUsPage = () => {
  return (
    <div>
      <div className='hero'>
        {/* <img src={HeroBkg} alt='Hero Image' /> */}
      </div>
      <Subscribe img={SubscribeTitle} title="Join my Inner Circle"/>
    </div>
  );
};

export default AboutUsPage;
