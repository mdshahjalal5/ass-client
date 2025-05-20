import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });
      setMessage("Profile updated successfully!");
      setTimeout(() => navigate("/my-profile"), 1500); // redirect after success
    } catch (error) {
      console.error("Update error:", error);
      setMessage("Failed to update profile.");
    }
  };

  if (!user) return <p className="text-center py-10">You must be logged in.</p>;

  return (
    <div className="flex justify-center items-center min-h-[65vh] px-4">
      <Helmet>
        <title>Update Profile || Subscription Box</title>
      </Helmet>
      <div className="card w-full max-w-md bg-base-100 shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Update Profile
        </h2>

        {message && (
          <div className="alert alert-info shadow-sm mb-4">
            <span>{message}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text">Display Name</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="url"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
