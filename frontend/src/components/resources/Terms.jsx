import React from "react";
import { motion } from "framer-motion";
import { FileText, Shield, Users, Lock, AlertCircle, Ban, Mail, Scale } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Introduction",
      content: `Welcome to SnapNutrient! These Terms and Conditions govern your use of our mobile app. By downloading, accessing, or using SnapNutrient from Google Play, you agree to comply with these Terms and with the Google Play Terms of Service.`
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Acceptance of Terms",
      content: `By installing or using this app, you confirm that you have read, understood, and agree to these Terms and Google Play policies. If you do not agree, please uninstall and do not use SnapNutrient.`
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User Accounts",
      content: `When creating and maintaining your account, you agree to:`,
      items: [
        "Provide accurate and updated information when creating an account",
        "Keep your login credentials secure and confidential",
        "Notify us immediately if you suspect unauthorized use",
        "We may suspend or terminate accounts that violate these Terms"
      ]
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "License to Use",
      content: `We grant you a limited, personal, non-commercial, non-transferable license to use SnapNutrient in accordance with these Terms and Google Play's Developer Distribution Agreement.`
    },
    {
      icon: <Ban className="w-6 h-6" />,
      title: "Prohibited Activities",
      content: `You agree not to:`,
      items: [
        "Violate Google Play policies or local laws",
        "Attempt to hack, reverse engineer, or disrupt the app",
        "Upload viruses, malicious code, or harmful content",
        "Use the app to harass, abuse, or harm others",
        "Copy, redistribute, or sell the app's code or content"
      ]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Content and Intellectual Property",
      content: `All content within SnapNutrient is protected by copyright and other intellectual property laws. You may not use our branding, logos, or content without written permission.`
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Privacy & Data",
      content: `Your data is handled according to our Privacy Policy and Google Play User Data policies. We do not sell your personal information. You may request data deletion by contacting us.`
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Disclaimer",
      content: `SnapNutrient is provided "as is." We do not guarantee complete accuracy of nutritional data. Always consult a qualified healthcare professional before making health-related decisions.`
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Suspension or Termination",
      content: `We reserve the right to suspend or terminate your access at any time if you violate these Terms or Google Play's policies.`
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
            <FileText className="w-10 h-10 text-white" />
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-emerald-500 mb-4">
          Terms & Conditions
        </h1>
        <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-4">
          Please read these terms carefully before using SnapNutrient.
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
          transition={{ duration: 0.6, delay: 0.9 }}
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
                For questions or concerns about these Terms and Conditions, contact us:
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
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-slate-400 mb-6">
            By using SnapNutrient, you agree to these Terms and Conditions.
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

export default Terms;