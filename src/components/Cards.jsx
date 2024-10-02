import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="p-3 my-5 mt-4 ">
        <div className="mt-16 duration-200 shadow-xl card bg-base-300 w-92 hover:scale-105 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p> {item.title} </p>
            <div className="flex justify-between card-actions">
              <div className="badge badge-outline duration-500 border-black p-4 border-[2px] rounded-full text-pink-500 font-semibold duration-500">
                ${item.price}
              </div>
              <div className="hover:bg-pink-500 hover:text-white px-4 py-1 duration-500 cursor-pointer border-pink-500 border-[2px] rounded-full text-pink-500 font-semibold duration-500">
                CLICK
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
