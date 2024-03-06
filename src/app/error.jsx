/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import { useEffect } from 'react';

export default function error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className='mt-10 text-center'>
      <h1>Something went wrong. Please try again.</h1>
      <button
        onClick={() => reset()}
        className='px-2 py-1 rounded-lg cursor-pointer border-2 border-transparent hover:bg-transparent hover:border-amber-500 bg-amber-500 mt-5 text-black font-semibold'
      >
        Try Again
      </button>
    </div>
  );
}
