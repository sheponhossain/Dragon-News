import { FaEye, FaShareAlt, FaBookmark } from 'react-icons/fa';

const NewsCard = ({ news }) => {
  const { title, author, thumbnail_url, rating, total_view, details } = news;

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-4">
        {/* Author Info */}
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-bold">{author?.name}</h3>
            <p className="text-sm text-gray-500">
              {new Date(news.author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Icons */}
        <div className="flex gap-3 text-gray-600 text-xl">
          <FaBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h2 className="font-bold text-xl mb-3">{title}</h2>

      {/* Image */}
      <img src={thumbnail_url} alt={title} className="w-full rounded-lg mb-4" />

      {/* Details */}
      <p className="text-gray-700 mb-3">
        {details.slice(0, 190)}...
        <span className="text-blue-600 cursor-pointer font-semibold">
          Read More
        </span>
      </p>

      {/* Footer Section */}
      <div className="flex justify-between items-center mt-4 border-t pt-3">
        {/* Rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: rating?.number }).map((_, i) => (
            <span key={i} className="text-orange-400 text-xl">
              ★
            </span>
          ))}
          <span className="ml-1 text-gray-700 font-medium">
            {rating?.number}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-600">
          <FaEye /> <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
