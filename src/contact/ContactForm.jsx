import { useImmer } from "use-immer";

const ContactForm = () => {
  const [contact, setContact] = useImmer({
    name: "",
    message: "",
  });

  const handleNameChange = (event) => {
    setContact((draft) => {
      draft.name = event.target.value;
    });
  };

  const handleMessageChange = (event) => {
    setContact((draft) => {
      draft.message = event.target.value;
    });
  };

  return (
    <>
      <div>
        <h1>Form Contact</h1>
        <form>
          <input
            type="text"
            placeholder="Name"
            value={contact.name}
            onChange={handleNameChange}
          />
          <input
            type="text"
            placeholder="Message"
            value={contact.message}
            onChange={handleMessageChange}
          />
        </form>

        <h1>Contact Detail</h1>
        <p>Name: {contact.name}</p>
        <p>Message: {contact.message}</p>
      </div>
    </>
  );
};

export default ContactForm;
