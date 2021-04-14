import React, { useState, useEffect } from "react";
import "../app.css";
import { db } from "../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("Messages")
      .add({
        name: name,
        email: email,
        category: category,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your response has been submitted successfully. Thank you for leaving a message!");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setCategory("");
    setMessage("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contact Us</h1>
      <p>Need some help which isn't covered by the FAQ? Want to give some feedback? Leave us a message!</p>
      <br/>
      <p>The inputs marked as <font color="red">*</font> are required.</p>
      <br/>
      <label class="required">Name</label>
      <input required
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Your Email ID"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label class="required">Category</label>
      <select id="category" name="category" required>
          <option value="technical" onChange={(e) => setName(e.target.value)}>Technical Issue</option>
          <option value="addbook" onChange={(e) => setName(e.target.value)}>Add a Book</option>
          <option value="feedback" onChange={(e) => setName(e.target.value)}>Feedback or Suggestions</option>
          <option value="other" onChange={(e) => setCategory(e.target.value)}>Other</option>
      </select>

      <label class="required">Message</label>
      <textarea required
        placeholder="Type Your Message Here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        style={{ background: loader ? "#e0d08783" : " rgba(71, 64, 30, 0.541)" }}
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;
