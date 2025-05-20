import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  if (!user)
    return <span className="loading loading-spinner text-primary"></span>;

  return (
    <div className="flex justify-center py-10 px-4 items-center min-h-[60vh]">
      <Helmet>
        <title>My Profile || Subscription Box</title>
      </Helmet>
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
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
            <strong>Email Verified:</strong> {user.emailVerified ? "Yes" : "No"}
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
  );
};

export default MyProfile;
