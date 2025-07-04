import ContactForm from "./ContactForm";
import ContactSvg from "./ContactSvg";
import "./ContactSection.scss";

const ContactSection = () => {
  return (
    <section id="contact-me">
      <div className="container">
        <ContactForm />
        <div className="svg-container">
          <ContactSvg />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
