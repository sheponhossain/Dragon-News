import React from 'react';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
  console.log(news);
  const { title, image_url, details } = news;

  return (
    <div className="*:py-4 border border-gray-400 p-4 mt-4 rounded-sm m-4">
      <img className="w-full" src={image_url} alt="" />
      <p className="text-3xl font-semibold">{title}</p>
      <p className="text-lg text-accent">{details}</p>

      <Link
        to={`/category/${news.category_id}`}
        className="btn btn-secondary mt-4"
      >
        <MdOutlineKeyboardBackspace />
        All news in this category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
