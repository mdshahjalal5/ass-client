import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import LottieAnimation from "../animation/Walking";
import { profileAnimation } from "../animation";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  if (!user)
    return <span className="loading loading-spinner text-primary"></span>;

  return (
    <>
      {/* <h2 className="pt-10">Profile of {user.displayName || "No Name Set"}</h2> */}
      <div className="text-center my-10">
        <h2 className="text-4xl font-extrabold bg-gradient-to-l from-purple-500 via-pink-400 to-purple-700 bg-clip-text text-transparent max-sm:text-xl">
          Welcome, {user.displayName || "Flavor Enthusiast"}!{" "}
          <span className="text-white">🍽️</span>
        </h2>
        <p className="mt-3 text-lg text-gray-400 max-sm:text-xs">
          Your culinary journey begins here. Explore, create, and share your
          passion for flavor.
        </p>
      </div>

      <div className="flex max-lg:flex-col-reverse justify-evenly  pt-3 px-4 items-center min-h-[60vh] ">
        <div className="flex-1 max-w-[600px]">
          <LottieAnimation animation={profileAnimation} />
        </div>
        <Helmet>
          <title>My Profile || FlavorBook</title>
        </Helmet>
        <div className="card w-full max-w-md bg-base-100 shadow flex-1">
          <figure className="px-10 pt-10">
            <img
              src={user.photoURL || "https://via.placeholder.com/100"}
              alt="Profile"
              className="rounded-full w-24 h-24 object-cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{user.displayName || "No Name Set"}</h2>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>UID:</strong> {user.uid}
            </p>
            <p>
              <strong>Email Verified:</strong>{" "}
              {user.emailVerified ? "Yes" : "No"}
            </p>
            <p>
              <strong>Provider:</strong> {user.providerData[0]?.providerId}
            </p>

            <div className="card-actions mt-4">
              <Link to="/update-profile" className="btn btn-primary">
                Update Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* ✨ Meaningful Message */}
      <div className="text-center">
        <p className="text-lg font-medium text-gray-400">
          ✨ Every recipe you create tells a story. Keep cooking, keep sharing,
          and let the world taste your creativity!
        </p>
      </div>
    </>
  );
};

export default MyProfile;
