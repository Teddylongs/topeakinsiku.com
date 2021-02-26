import React from "react";
import Subscribe from "../components/Subscribe";
import { Offers } from "../components/Cards";
import {
  Events,
  HeroBkg,
  HiThere,
  MeetTopeImg,
  MeetTope,
  Scribble,
  Podcasts,
  OffersTitle,
  Mentorship,
  Subscribe as SubscribeTitle,
  Interim,
} from "../assets/images";
const HomePage = () => {
  return (
    <div>
      <div className='hero'>
        <img src={HeroBkg} alt='Hero Image' />
      </div>

      <section id='introduction' className='mb-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 align-items-center justify-content-center my-5'>
              <img
                className='mx-auto img-fluid mb-1'
                src={HiThere}
                alt="Hi there! I'm Tope"
              />
              <p>
                Wife, Mother, Pastor, Author, Mentor, <br />
                Podcaster, Traveller. Welcome to my classroom, <br />
                podcast and all things JESUS!
              </p>
            </div>
            <div className='col-6'></div>
          </div>
        </div>
      </section>
      <section id='offers' className='py-5 my-5'>
        <div className='container'>
          <div className='row mb-5'>
            <div className='col-sm-4'>
              <img
                className='mx-auto img-fluid'
                src={OffersTitle}
                alt="Hi there! I'm Tope"
              />
            </div>
          </div>
          <div className='row pt-2 justify-content-center'>
            <div className='col-sm-4 text-center'>
              <Offers
                img={Interim}
                title='Podcasts'
                imgWidth='350px'
                imgHeight='350px'
                url='/podcasts'
              />
            </div>
            <div className='col-sm-4 text-center'>
              <Offers
                img={Interim}
                title='Mentorship'
                imgWidth='350px'
                imgHeight='500px'
                url='/mentorship'
              />
            </div>
            <div className='col-sm-4 text-center'>
              <Offers
                img={Interim}
                title='Events'
                imgWidth='350px'
                imgHeight='350px'
                url='/events'
              />
            </div>
          </div>

          {/* <div className='row'>
            <div className='col-sm-4'>
              <img
                className='mx-auto img-fluid'
                src={Podcasts}
                alt="Hi there! I'm Tope"
              />
            </div>
            <div className='col-sm-4'>
              <img
                className='mx-auto img-fluid'
                src={Mentorship}
                alt="Hi there! I'm Tope"
              />
            </div>
            <div className='col-sm-4'>
              <img
                className='mx-auto img-fluid'
                src={Events}
                alt="Hi there! I'm Tope"
              />
            </div>
          </div> */}
        </div>
      </section>
      <section id='meet-tope' className='mt-5'>
        <div className='container'>
          <div className='row py-5'>
            <div className='col-sm-7'>
              <div className='text-center py-2'>
                <img className='img-fluid' src={MeetTopeImg} alt='image' />
              </div>
            </div>
            <div className='col-sm-5 py-5 px-5'>
              <div className='row mx-auto'>
                <img className='img-fluid mb-1' src={MeetTope} alt='image' />
                <img className='img-fluid mb-5' src={Scribble} alt='image' />
                <div className='mx-auto justify-content-center'>
                  <h3 className='mb-4'>I’m a Jesus girl with a passion</h3>
                  <h3 className='mb-4'>I’m married to my best friend </h3>
                  <h3 className='mb-4'>
                    I’m the co-pastor to a <br />
                    congregation of champions
                  </h3>
                  <h3 className='mb-4'>But there’s more… </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Subscribe img={SubscribeTitle} title='Join my Inner Circle' />
    </div>
  );
};

export default HomePage;
