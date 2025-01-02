import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

const Profile = () => {
  const profile = useContext(ProfileContext);
  return (
    <div>
      <h1>Profile</h1>
      <p>Nama: {profile}</p>
    </div>
  );
};

export default Profile;
