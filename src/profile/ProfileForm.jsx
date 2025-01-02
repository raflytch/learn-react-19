const ProfileForm = ({ name, setName }) => {
  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h2>Profile Form</h2>
      <input type="text" value={name} onChange={handleChange} />
    </div>
  );
};

export default ProfileForm;
