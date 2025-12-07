import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { LiaFacebookF } from 'react-icons/lia';
import { PiTwitterLogoFill } from 'react-icons/pi';

const SocialMedia = () => {
  return (
    <div className="mt-8 font-bold text-xl">
      <p>Find Us On</p>
      <div className="grid grid-cols-1 ">
        <button className="btn btn-outline  btn-primary font-bold ">
          {' '}
          <LiaFacebookF size={20} />
          Facebook
        </button>
        <button className="btn btn-outline  btn-primary font-bold">
          {' '}
          <PiTwitterLogoFill size={20} />
          Twitter
        </button>
        <button className="btn btn-outline  btn-primary font-bold">
          {' '}
          <BsInstagram size={20} />
          Instagram
        </button>
      </div>
    </div>
  );
};

export default SocialMedia;
