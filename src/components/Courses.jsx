import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json";
import { Link } from "react-router-dom";

function Courses() {
  return (
    <>
      <div className="container px-4 mx-auto max-w-screen-2xl md:px-20">
        <div className="justify-center text-center mt-28 align-center">
          <h1 className="text-2xl md:text-4xl">
            Je vous donnes, <span className="text-pink-500">Vous avez vu?</span>
          </h1>
          <p className="mt-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ipsa
            odio alias aut. Tempore, magni. Minima ratione minus perferendis
            quam repellat laboriosam fugiat corporis sunt. Nulla mollitia dolor
            beatae hic. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Unde ipsa odio alias aut. Tempore, magni. Minima ratione minus
          </p>
            <Link to="/">
            <button className="bg-pink-500 rounded-lg text-white px-4 py-1 mt-8 hover:bg-pink-600 hover:text-white border-[1px] border-pink-500 duration-200">
              Retour
            </button>
            </Link>
            
          <div className="grid grid-cols-1 mt-12 md:grid-cols-4">
            {list.map((item) => (
              <Cards key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
