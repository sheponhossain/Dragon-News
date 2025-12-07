import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import RightAside from '../Components/HomeLayout/RightAside';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from '../Components/NewsDetailsCard';

const NewsDetails = () => {
  const [news, setNews] = useState({});
  const newsData = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    const newsDetails = newsData.find((singleNews) => singleNews.id == id);
    setNews(newsDetails);
  }, [newsData, id]);

  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>

      <main className="w-11/12 mx-auto grid grid-cols-12 mt-4">
        <section className="col-span-9">
          <h1 className="text-2xl font-bold"> Dragon News</h1>
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>

        {/* Right side section */}

        <aside className="col-span-3 mt-4">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
