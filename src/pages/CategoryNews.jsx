import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {
  const [CategoryNewsData, setCategoryNewsData] = useState([]);
  const { id } = useParams();
  const data = useLoaderData();
  console.log(data);

  useEffect(() => {
    if (!data) {
      return;
    }
    if (id == '0') {
      setCategoryNewsData(data);
      return;
    } else if (id == '1') {
      const filteredData = data.filter(
        (news) => news.others.is_today_pick == id
      );
      setCategoryNewsData(filteredData);
    } else {
      const filteredData = data.filter((news) => news.category_id == id);
      setCategoryNewsData(filteredData);
    }
  }, [id, data]);

  return (
    <div>
      <h1 className="font-bold">Dragon News Home</h1>
      {CategoryNewsData.map((news) => (
        <NewsCard news={news}></NewsCard>
      ))}
    </div>
  );
};

export default CategoryNews;
