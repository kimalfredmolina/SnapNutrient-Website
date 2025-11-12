import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqData = [
    {
      question: "How do I scan food?",
      answer:
        "Simply tap the 'Scan Food' tab at the bottom of the screen, point your camera at the food, and tap the capture button. Our AI will automatically recognize the food and provide nutritional information.",
      category: "Getting Started"
    },
    {
      question: "How accurate is the nutrition data?",
      answer:
        "Our AI-powered food recognition system provides highly accurate nutritional estimates based on visual analysis. However, actual values may vary depending on preparation methods and portion sizes.",
      category: "Accuracy"
    },
    {
      question: "Can I track multiple meals per day?",
      answer:
        "Yes! You can scan and track as many meals and snacks as you want throughout the day. All your nutrition data will be automatically compiled in your daily summary.",
      category: "Tracking"
    },
    {
      question: "How do I set my nutrition goals?",
      answer:
        "Go to Homepage > Macro Goals > Edit, then calculate your macro goals to set your daily calorie, protein, carbohydrate, and fat targets based on your computed macros.",
      category: "Goals"
    },
    {
      question: "What if the app doesn't recognize my food?",
      answer:
        "If our AI doesn't recognize a Filipino dish, you can manually add it and include its nutritional information so you can still track your macros accurately.",
      category: "Troubleshooting"
    },
    {
      question: "Is my data secure and private?",
      answer:
        "Yes, your personal information and nutrition data are encrypted and stored securely. We never share your data with third parties without your explicit consent.",
      category: "Privacy"
    },
    {
      question: "Does the app work offline?",
      answer:
        "The food scanning feature requires an internet connection to use our AI recognition system. However, you can view your previously logged meals and nutrition history offline.",
      category: "Technical"
    }
  ];

  const filteredFAQs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faqs_page" className="min-h-screen px-8 md:px-24 py-20">
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
            <HelpCircle className="w-10 h-10 text-white" />
          </div>
        </div>
        <h2 className="text-5xl md:text-6xl font-extrabold text-emerald-500 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
          Find answers to common questions about SnapNutrient. Can't find what you're looking for? Contact our support team.
        </p>
      </motion.div>


      {/* FAQ List */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        {filteredFAQs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">
              No FAQs found matching your search. Try different keywords.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden hover:border-emerald-500/50 transition-all duration-300"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left group"
                >
                  <div className="flex-1 pr-4">
                    <span className="inline-block text-xs font-semibold text-emerald-400 mb-2">
                      {faq.category}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-emerald-500" />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="border-t border-slate-700/50 pt-4">
                          <p className="text-slate-400 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Contact Support Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-16"
      >
        <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-3xl p-8 md:p-12 border border-emerald-500/20 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Still Have Questions?
          </h3>
          <p className="text-slate-400 text-lg mb-8">
            Our support team is here to help. Get in touch with us anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact_page" className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-xl bg-emerald-500 hover:bg-emerald-400 px-8 font-bold text-white text-lg duration-500 shadow-xl hover:shadow-emerald-500/50">
              <div className="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0">
                Contact Support
              </div>
              <div className="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                  <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FAQs;