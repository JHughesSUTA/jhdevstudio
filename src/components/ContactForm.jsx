import "./ContactForm.scss";
import { toast } from "react-toastify";
import DecryptedText from "./DecryptedText";
import { motion } from "motion/react";

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
      <form id="contact-form" onSubmit={onSubmit}>
        <h2>
          <span>
            <DecryptedText
              text="Lets keep in touch"
              animateOn="view"
              speed={75}
              revealDirection="start"
              max-iterations={10}
              sequential={true}
              // useOriginalCharsOnly={true}
            />
          </span>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            &nbsp;&#128075;
          </motion.span>
        </h2>

        <motion.div
          className="form-group"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <label htmlFor="name">Full name</label>
          <input id="name" type="text" name="name" required />
        </motion.div>
        <motion.div
          className="form-group"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <label htmlFor="email">Email address</label>
          <input type="email" name="email" required />
        </motion.div>

        <motion.div
          className="form-group"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <label htmlFor="name">Message</label>
          <textarea name="message" required></textarea>
        </motion.div>

        <motion.div
          className="form-group"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button type="submit">Send</button>
        </motion.div>
      </form>
    </div>
  );
}
