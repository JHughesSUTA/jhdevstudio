import "./ContactForm.scss";
import { toast } from "react-toastify";

export default function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a9dad87f-7567-4d6d-a5db-b7d0e50622c5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      event.target.reset();
      toast.success("Your message has been sent.");
    } else {
      console.log("Error", data);
      toast.error("Unable to send your message.");
    }
  };

  return (
    <div className="form-container">
      <h2>Let's keep in touch &#128075;</h2>
      <form id="contact-form" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full name</label>
          <input id="name" type="text" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="name">Message</label>
          <textarea name="message" required></textarea>
        </div>

        <div className="form-group">
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
}
