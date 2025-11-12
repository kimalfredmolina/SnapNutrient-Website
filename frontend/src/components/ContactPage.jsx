import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, MessageSquare, Clock, CheckCircle, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "snapnutrientapp@gmail.com",
      link: "mailto:snapnutrientapp@gmail.com",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      content: "+63 09123718217",
      link: "tel:+63 09123718217",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      content: "Taguig City, Metro Manila, Philippines",
      link: "#",
      gradient: "from-teal-500 to-emerald-500"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM GMT+8",
      link: "#",
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div id="contact_page" className="min-h-screen px-8 md:px-24 py-20">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-emerald-500 mb-4">
          Get In Touch
        </h2>
        <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
          Have questions or feedback? We'd love to hear from you. Our team is here to help you succeed.
        </p>
      </motion.div>

      {/* Contact Info Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-7xl mx-auto"
      >
        {contactInfo.map((info, index) => (
          <motion.a
            key={index}
            href={info.link}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 shadow-lg hover:shadow-emerald-500/20 group cursor-pointer"
          >
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <div className="text-white">
                {info.icon}
              </div>
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
              {info.title}
            </h3>
            <p className="text-slate-400 text-sm">
              {info.content}
            </p>
          </motion.a>
        ))}
      </motion.div>

      {/* Main Content - Form and Info */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}

          className="lg:col-span-3"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-slate-700/50 shadow-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">
                Send Us a Message
              </h3>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                <p className="text-slate-400 text-center">
                  Thanks for reaching out. We'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-300 font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-medium mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                      placeholder="youremail@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group relative inline-flex w-full h-14 items-center justify-center overflow-hidden rounded-xl bg-emerald-500 hover:bg-emerald-400 px-6 font-bold text-white text-lg duration-500 shadow-xl hover:shadow-emerald-500/50"
                >
                  <div className="flex items-center gap-2 translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0">
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </div>
                  <div className="absolute flex items-center gap-2 translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
                    <CheckCircle className="w-5 h-5" />
                    <span>Send Message</span>
                  </div>
                </button>
              </form>
            )}
          </div>
        </motion.div>

        {/* Info Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}

          className="lg:col-span-2 space-y-6"
        >
          {/* FAQ Box */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Quick Help</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-emerald-400 font-semibold mb-2">Response Time</h4>
                <p className="text-slate-400 text-sm">
                  We typically respond within 24 hours on business days.
                </p>
              </div>
              <div>
                <h4 className="text-emerald-400 font-semibold mb-2">Support Available</h4>
                <p className="text-slate-400 text-sm">
                  Our support team is available Monday through Friday, 9 AM - 6 PM GMT+8.
                </p>
              </div>
              <div>
                <h4 className="text-emerald-400 font-semibold mb-2">Emergency Support</h4>
                <p className="text-slate-400 text-sm">
                  For urgent issues, please call our hotline at +63 09123718217.
                </p>
              </div>
            </div>
          </div>

          {/* Social Media Box */}
            <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-3xl p-8 border border-emerald-500/20 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Connect With Us</h3>
              <p className="text-slate-400 mb-6 text-sm">
                Follow us on social media for tips, updates, and community support.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: <Facebook className="w-5 h-5" />, href: 'https://facebook.com/yourpage', label: 'Facebook' },
                  { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/yourpage', label: 'Twitter' },
                  { icon: <Instagram className="w-5 h-5" />, href: 'https://instagram.com/yourpage', label: 'Instagram' },
                  { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
                  { icon: <Send className="w-5 h-5" />, href: 'https://t.me/+8TwEgfD5V-RmZDc9', label: 'Telegram' },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-emerald-500 border border-slate-700 hover:border-emerald-400 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;