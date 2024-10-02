import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="w-[600px]">
          <div className="modal-box">
            {/* button retour */}
            <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
              <Link
                to="/"
                className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
              >
                ✕
              </Link>
            
            <h3 className="text-lg font-bold dark:text-black">S'inscrire</h3>

            {/* Name */}
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Entrer votre nom"
                className="px-3 border rounded-md outline-none w-80"
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && <span className="ml-4 text-red-700 underline">Invalid !Veillez saisir.</span>}
            </div>

            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Entrer votre email"
                className="px-3 border rounded-md outline-none w-80"
                {...register("email", { required: true })}
              />
              <br />
               {errors.email && <span className="ml-4 text-red-700 underline">Invalid !Veillez saisir.</span>}
            </div>

            {/* password */}
            <div className="mt-4 space-y-2">
              <span>Mot de passe</span>
              <br />
              <input
                type="password"
                placeholder="Entrer votre mot de passe"
                className="px-3 border rounded-md outline-none w-80"
                {...register("password", { required: true })}               
              />
              <br />
              {errors.password && <span className="ml-4 text-red-700 underline">Invalid !Veillez saisir.</span>}
            </div>

            {/* button inscription*/}
            <div className="flex justify-between mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-600 hover:text-white border-[1px] border-pink-500 duration-200">
                S'inscrire ici
              </button>
              <p>
                Vous enregistrer?{" "}
                <button
                  to="/"
                  className="text-blue-500 underline cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>
                <Login />
              </p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
