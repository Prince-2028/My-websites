import { useState } from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 18 } },
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [toast, setToast] = useState("");
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    try {
      const res = await fetch("https://my-websites-2.onrender.com/api/message", {
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
    setLoading(false);
    setTimeout(() => setToast(""), 2000);
  };

  return (
    <motion.section
      id="contact"
      className="py-24 px-4 bg-gradient-to-br from-blue-50 to-white"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div
        className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden border border-blue-100"
        variants={containerVariants}
      >
        {/* Left: Contact Info & Socials */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start bg-gradient-to-br from-blue-100 to-blue-50 p-10"
          variants={itemVariants}
        >
          <motion.h2 className="section-title text-blue-800 mb-4 text-center md:text-left" variants={itemVariants}>
            Contact Me
          </motion.h2>
          <motion.p className="text-gray-600 mb-4 text-center md:text-left" variants={itemVariants}>
            Feel free to reach out if you'd like to collaborate or just say
            hello!
          </motion.p>
          <motion.a
            href="mailto:princekumar404@outlook.com"
            className="text-blue-600 text-lg hover:underline mb-6 text-center md:text-left"
            variants={itemVariants}
          >
            pk20287022@gmail.com
          </motion.a>
          <motion.div className="flex gap-6 mt-4 justify-center md:justify-start" variants={itemVariants}>
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
          </motion.div>
        </motion.div>
        {/* Right: Contact Form */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center items-center bg-white p-10"
          variants={itemVariants}
        >
          <motion.form
            className="w-full max-w-md flex flex-col gap-4"
            autoComplete="off"
            onSubmit={handleSubmit}
            variants={containerVariants}
          >
            <motion.h3 className="text-2xl font-semibold mb-4 text-center text-blue-700" variants={itemVariants}>
              Send a Message
            </motion.h3>
            <motion.input
              type="text"
              name="name"
              placeholder="Your Name"
              className="border border-blue-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.name}
              onChange={handleChange}
              required
              variants={itemVariants}
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              className="border border-blue-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.email}
              onChange={handleChange}
              required
              variants={itemVariants}
            />
            <motion.textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="border border-blue-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={form.message}
              onChange={handleChange}
              required
              variants={itemVariants}
            />
            <motion.button
              type="submit"
              className="btn-primary text-lg flex items-center justify-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              disabled={loading}
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
              ) : null}
              {loading ? "Sending..." : "Send"}
            </motion.button>
            {toast && (
              <motion.div className="text-center text-green-600 font-medium mt-2" variants={itemVariants}>
                {toast}
              </motion.div>
            )}
          </motion.form>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
