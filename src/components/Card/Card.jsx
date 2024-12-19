import React from 'react';

function Card({ productname, img, content }) {
  return (
    <div className="card group bg-base-100 w-96 shadow-xl bg-blue-300 rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out">
      <figure className="mt-6 mx-10 rounded-md hover:rounded-lg">
        <img  className='h-80 w-72' src={img} alt="Shoes" />
      </figure>
      <div className="card-body mx-6 py-6">
        <h2 className="card-title text-2xl font-bold text-blue-900 group-hover:text-white">
          {productname}
        </h2>
        <p className='text-gray-900 group-hover:text-white'>{content}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
}

export default Card;
