import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, UserCheck, Mail, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Introduction",
      content: `SnapNutrient ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal data when you use our mobile application downloaded from Google Play.`
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Information We Collect",
      content: `We may collect the following types of information to provide a personalized nutrition experience:`,
      subsections: [
        {
          subtitle: "Personal Data",
          items: [
            "Name, email address, and login credentials",
            "Age, gender, height, weight, and activity level",
            "Profile photo (if you choose to upload one)",
            "Food preferences and dietary restrictions"
          ]
        },
        {
          subtitle: "Usage Data",
          items: [
            "Photos of food you scan",
            "Macro and calorie intake history",
            "Your daily goals and progress",
            "Device and app analytics for performance improvement"
          ]
        }
      ]
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "How We Use Your Information",
      content: `Your data helps us calculate your personalized nutrition plan and improve your experience. Specifically, we use your information to:`,
      items: [
        "Calculate your daily macro and calorie needs",
        "Track your nutrition progress over time",
        "Personalize recommendations and insights",
        "Send reminders and notifications you enable",
        "Improve the performance and features of the app",
        "Ensure security and prevent misuse"
      ]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Security",
      content: `We use encryption and secure storage methods to protect your data. Your login credentials and personal health information are stored safely and are not shared with third parties except as required by law or with your explicit consent.`
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Your Rights",
      content: `You can request to:`,
      items: [
        "View the data we store about you",
        "Update incorrect profile information",
        "Delete your account and personal data permanently",
        "Export your nutrition history",
        "Opt-out of email or push notifications"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Google Play Privacy Compliance",
      content: `Our data practices comply with Google Play's User Data policy. SnapNutrient does not sell or share your personal information with advertisers. We only use your data to provide core functionality and improve your health tracking experience.`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 px-8 md:px-24 py-20">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
            <Shield className="w-10 h-10 text-white" />
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-emerald-500 mb-4">
          Privacy Policy
        </h1>
        <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-4">
          Your privacy is important to us. Learn how we collect, use, and protect your information.
        </p>
        <p className="text-slate-500 text-sm">
          Last updated: September 1, 2025
        </p>
      </motion.div>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-slate-700/50 shadow-2xl mb-6 hover:border-emerald-500/30 transition-all duration-300"
          >
            {/* Section Header */}
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                <div className="text-white">
                  {section.icon}
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {section.title}
                </h2>
                <p className="text-slate-400 leading-relaxed text-base">
                  {section.content}
                </p>
              </div>
            </div>

            {/* Subsections */}
            {section.subsections && (
              <div className="ml-16 mt-4 space-y-4">
                {section.subsections.map((subsection, subIndex) => (
                  <div key={subIndex}>
                    <h3 className="text-lg font-semibold text-emerald-400 mb-3">
                      {subsection.subtitle}
                    </h3>
                    <ul className="space-y-2">
                      {subsection.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <span className="text-emerald-500 mt-1">•</span>
                          <span className="text-slate-400 leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Items List */}
            {section.items && (
              <ul className="ml-16 mt-4 space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span className="text-slate-400 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-3xl p-8 md:p-10 border border-emerald-500/20 shadow-2xl"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Contact Us
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                If you have questions about this Privacy Policy or want to manage your data, contact us:
              </p>
              <a
                href="mailto:snapnutrientapp@gmail.com"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-lg font-semibold transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                snapnutrientapp@gmail.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-slate-400 mb-6">
            By using SnapNutrient, you agree to this Privacy Policy.
          </p>
          <Link to="/">
            <button className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-xl bg-emerald-500 hover:bg-emerald-400 px-8 font-bold text-white text-lg duration-500 shadow-xl hover:shadow-emerald-500/50">
              <div className="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0">
                Back to Home
              </div>
              <div className="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                  <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
              </div>
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;