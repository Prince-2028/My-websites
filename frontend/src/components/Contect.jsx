import { useState } from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [toast, setToast] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setToast("Please fill all fields.");
      setTimeout(() => setToast(""), 2000);
      return;
    }
    try {
      const res = await fetch("http://localhost:5000/api/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setToast("Message sent! Thank you for reaching out.");
        setForm({ name: "", email: "", message: "" });
      } else {
        setToast("Failed to send message. Try again later.");
      }
    } catch (error) {
      setToast("Server error. Please try again later.");
    }
    setTimeout(() => setToast(""), 2000);
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white"
    >
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
        {/* Left: Contact Info & Socials */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start bg-gradient-to-br from-blue-100 to-blue-50 p-8">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-4 text-center md:text-left">
            Contact Me
          </h2>
          <p className="text-gray-600 mb-4 text-center md:text-left">
            Feel free to reach out if you'd like to collaborate or just say
            hello!
          </p>
          <a
            href="mailto:princekumar404@outlook.com"
            className="text-blue-600 text-lg hover:underline mb-6 text-center md:text-left"
          >
            pk20287022@gmail.com
          </a>
          <div className="flex gap-6 mt-4 justify-center md:justify-start">
            <a
              href="https://www.instagram.com/ll__prince.xx?igshid=NzZhOTFlYzFmZQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 text-2xl hover:scale-125 transition-transform duration-200"
              title="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/yadav.kumer.37/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 text-2xl hover:scale-125 transition-transform duration-200"
              title="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://wa.me/7027236462"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 text-2xl hover:scale-125 transition-transform duration-200"
              title="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://github.com/Prince-2028"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 text-2xl hover:scale-125 transition-transform duration-200"
              title="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        {/* Right: Contact Form */}
        <div className="w-full md:w-1/2 flex justify-center items-center bg-white p-8">
          <form
            className="w-full max-w-md flex flex-col gap-4"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-4 text-center text-blue-700">
              Send a Message
            </h3>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="border border-blue-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="border border-blue-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="border border-blue-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Send
            </button>
            {toast && (
              <div className="text-center text-green-600 font-medium mt-2">
                {toast}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
