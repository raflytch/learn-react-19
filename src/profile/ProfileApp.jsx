import { useState } from "react";
import Profile from "./Profile";
import ProfileAddress from "./ProfileAddress";
import { ProfileContext } from "./ProfileContext";
import ProfileForm from "./ProfileForm";

const ProfileApp = () => {
  const [name, setName] = useState("Rafly Aziz Abdillah");
  return (
    <div>
      <ProfileContext.Provider value={name}>
        <h1>Profile</h1>
        <ProfileForm name={name} setName={setName} />
        <Profile />
        <ProfileAddress />
      </ProfileContext.Provider>
    </div>
  );
};

export default ProfileApp;
