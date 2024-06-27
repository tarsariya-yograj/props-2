import React, { useState } from "react";

const Profile = ({ img, name, age, bio, loc }) => {
  let [onclick, setonclick] = useState(false);

  const fo = () => {
    setonclick(onclick ? false : true);
    console.log(onclick);
    if (!onclick) {
      alert("Following");
      document.getElementById("btn").innerHTML = "Unfollow";
    } else {
      alert("Unfollowing");
      document.getElementById("btn").innerHTML = "Follow";
    }
  };

  return (
    <div className=" h-screen p-1">
      <div className="bg-white shadow-2xl shadow-black w-1/4 mx-auto mt-40 rounded-xl">
        <div className="w-3/6 m-auto p-1">
          <img
            className="rounded-full mx-auto my-3 shadow-2xl shadow-black"
            src={img}
          />
        </div>
        <div className="w-11/12 m-auto items-center">
          <p className="mt-3 font-medium text-xl">Username: {name}</p>
          <p className="mt-3 font-medium text-xl">Age: {age}</p>
          <p className="mt-3 font-medium text-xl ">Bio: {bio}</p>
          <p className="mt-3 font-medium text-xl">Location: {loc}</p>
        </div>

        <div className="text-center">
          <button
            id="btn"
            onClick={() => fo()}
            className="border-2 border-black px-10 shadow-2xl shadow-black py-2 rounded-lg my-3 w-1/2"
          >
            Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
