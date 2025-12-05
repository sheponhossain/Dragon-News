import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
  return (
    <div className="w-11/12 mx-auto flex gap-4 bg-base-200 mt-6 p-2">
      <p className="bg-secondary text-white px-3 py-2 font-semibold">Latest</p>
      <Marquee>
        <p>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as it happened
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
