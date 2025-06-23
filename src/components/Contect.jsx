import { useState } from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [toast, setToast] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setToast("Please fill all fields.");
      setTimeout(() => setToast(""), 2000);
      return;
    }
    setToast("Message sent! (Demo only)");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setToast(""), 2000);
  };

  return (
    <section id="Contact" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center md:items-start">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
          <p className="text-gray-600 mb-4">
            Feel free to reach out if you'd like to collaborate or just say hello!
          </p>
          <a
            href="mailto:princekumar404@outlook.com"
            className="text-blue-600 text-lg hover:underline block mb-6"
          >
            pk20287022@gmail.com
          </a>
          <div className="flex justify-center md:justify-start gap-6 mt-4">
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
        <div className="w-full md:w-1/2 flex justify-center">
          <form
            className="w-full max-w-md bg-gray-50 rounded-lg shadow-md p-8 flex flex-col gap-4"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Send a Message
            </h3>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
