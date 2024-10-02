import "./ContactUs.css";

const ContactUs = () => {
  return (
    <form className="contactus-container">
      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>Phone: +00000000000</p>
        <p>Email: info@example.com</p>
        <p>Address: 123 Example Street, Nairobi, Kenya</p>
      </div>
      <div className="form-section">
        <div className="mb-3">
          <label htmlFor="Name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="Name"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="Email"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Message" className="form-label">
            Message
          </label>
          <input
            type="text"
            className="form-control"
            id="Message"
            placeholder="Your Message"
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactUs;
