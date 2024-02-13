import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { days_one } from "@/app/font";

const Contact = () => {
  return (
    <div
      id="contact"
      className="purple_bg3 flex flex-col items-center justify-center py-20 px-20 border-b border-gray-100"
    >
      <p className={`text-3xl ${days_one.className} leading-normal`}>
        Contact and Support
      </p>

      <p className="pb-20 text_class2">
        We&apos;re always eager to hear your thoughts and suggestions! What
        other features do you expect in our next release? Please don&apos;t
        hesitate to contact us and share your valuable feedback.
      </p>
      <div className="contact_options">
        <article className="contact_option">
          <MdOutlineMailOutline className="contact_option-icon" />
          <h4>Email</h4>
          <h5>zavala.ricardo.m@gmail.com</h5>
          {/* eamil will be auto populate */}
          <a href="mailto:zavala.ricardo.m@gmail.com">Send a Message</a>
        </article>

        <article className="contact_option">
          <FaLinkedin className="contact_option-icon" />
          <h4>Linkedin</h4>
          <h5>Ricardo Zavala</h5>
          {/* eamil will be auto populate */}
          <a href="https://www.linkedin.com/in/ricardo-zavala-17000265/" target="_blank">
            Send a Message
          </a>
        </article>
      </div>
    </div>
  );
};

export default Contact;
