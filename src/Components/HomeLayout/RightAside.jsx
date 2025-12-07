import React from 'react';
import SocialLogin from './SocialLogin';
import SocialMedia from './SocialMedia';
import Swimmingimg from '../../assets/swimming.png';
import Classimg from '../../assets/class.png';
import PlayGroundimg from '../../assets/playground.png';
import univarse from '../../assets/univars.png';

const RightAside = () => {
  return (
    <div>
      <SocialLogin></SocialLogin>
      <SocialMedia></SocialMedia>

      <div className="grid grid-cols-1">
        <img src={Swimmingimg} alt="Swimming" />
        <img src={Classimg} alt="Class" />
        <img src={PlayGroundimg} alt="PlayGround" />
        <img src={univarse} alt="univarse" />
      </div>
    </div>
  );
};

export default RightAside;
