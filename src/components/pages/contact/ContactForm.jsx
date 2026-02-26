function ContactForm() {
  return (
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
  );
}

export default ContactForm;
