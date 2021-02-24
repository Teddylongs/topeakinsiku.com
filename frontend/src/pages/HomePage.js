import React from "react";
import JoinInnerCircle from "../components/JoinInnerCircle";
import {
  Events,
  HeroBkg,
  HiThere,
  MeetTopeImg,
  MeetTope,
  Scribble,
  Offers,
  Podcasts,
  Mentorship,
} from "../assets/images";
const HomePage = () => {
  return (
    <div>
      <section id='introduction' className='my-5'>
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
                src={Offers}
                alt="Hi there! I'm Tope"
              />
            </div>
          </div>

          <div className='row'>
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
          </div>
        </div>
      </section>
      <section id='meet-tope' className='my-5'>
        <div className='container'>
          <div className='row py-5'>
            <div className='col-sm-7'>
              <div className='text-center'>
                <img className='img-fluid ' src={MeetTopeImg} alt='image' />
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
      <JoinInnerCircle />
    </div>
  );
};

export default HomePage;
