import React from "react";
import JoinInnerCircle from "../components/JoinInnerCircle";
import {HeroBkg} from '../assets/images'
const HomePage = () => {
  return (
    <div className='container'>
      <section id='introduction'>
        <div className='row'>
          <div className='col-6 align-items-center justify-content-center'>
            <h1>Hi There! I'm Tope</h1>
            <p>
              Wife, Mother, Pastor, Author, Mentor, <br />
              Podcaster, Traveller. Welcome to my classroom, <br />
              podcast and all things JESUS!
            </p>
          </div>
          <div className='col-6'></div>
        </div>
      </section>
      <section id='offers'>
        <div className='row'>
          <h1>Here's what I have for you</h1>
        </div>
        <div className='row'>
          <div className='col-4'>Podcasts</div>
          <div className='col-4'>Mentorship</div>
          <div className='col-4'>Events</div>
        </div>
      </section>
    <section id='meet-tope'>
        <div className="row">
            <div className="col-sm-6">Picture</div>
            <div className="col-sm-6">
                <h1>Meet Tope</h1>
            </div>
        </div>
    </section>
    <JoinInnerCircle />
    </div>
  );
};

export default HomePage;
