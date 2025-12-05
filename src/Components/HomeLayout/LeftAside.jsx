import React, { Suspense } from 'react';
import Categorys from '../categorys';
import { RotatingLines } from 'react-loader-spinner';

const LeftAside = () => {
  return (
    <div>
      <Suspense
        fallback={
          <RotatingLines height="40" width="40" color="grey"></RotatingLines>
        }
      >
        <Categorys></Categorys>
      </Suspense>
    </div>
  );
};

export default LeftAside;
