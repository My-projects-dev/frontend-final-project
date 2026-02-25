function Contact() {
  return (
    <div className="contact-page">
      <div className="map-area" style={{ width: "100%", height: "500px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.123456789!2d49.867!3d40.4093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d27e8bfa2f5%3A0xabcdef123456!2sBaku!5e0!3m2!1sen!2saz!4v1690000000000!5m2!1sen!2saz"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="message_wrp">
        <div>
          <h2>Send Us a Massage</h2>
          <div className="line"></div>
        </div>
        <form action="" method="post">
          <input type="text" required placeholder="Name*" name="name" />
          <input type="email" required placeholder="Email*" name="email" />
          <textarea name="message" placeholder="Message" rows="5"></textarea>
          <button type="submit">POST MESSAGE</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
