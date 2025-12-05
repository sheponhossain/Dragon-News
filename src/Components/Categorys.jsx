import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('/categories.json').then((res) => res.json());

const Categorys = () => {
  const categorys = use(categoryPromise);
  return (
    <div>
      <h1 className="font-bold">All Caterogy {categorys.length}</h1>
      <div className="grid grid-cols-1 mt-3 space-y-2 ">
        {categorys.map((category) => (
          <NavLink
            key={category.id}
            to={`/category/${category.id}`}
            className={
              'btn bg-base-100 border-0 hover:bg-base-200 text-left text-accent'
            }
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categorys;
