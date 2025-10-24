import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Utensils, TrendingUp, Target, Calendar, History, BarChart3, Apple } from 'lucide-react';

const FeaturePage = () => {
  const features = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Scan Food",
      description: "Simply snap a photo of your meal and let AI identify the food and calculate nutritional values instantly.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Track Meals",
      description: "Log your breakfast, lunch, dinner, and snacks effortlessly. Keep a complete record of everything you eat.",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Streak Tracker",
      description: "Build healthy habits by maintaining your daily logging streak. Stay motivated with visual progress indicators.",
      gradient: "from-emerald-500 to-green-500"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Macro Calculator",
      description: "Get precise calculations for proteins, carbs, and fats. Know exactly what you're consuming every day.",
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Macro Goals",
      description: "Set personalized daily macro targets based on your fitness goals. Track your progress towards each goal.",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: <History className="w-8 h-8" />,
      title: "History Log",
      description: "Review your past meals and nutritional intake. Analyze patterns and make informed dietary decisions.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Daily Insights",
      description: "Get personalized recommendations and insights based on your daily intake and nutritional patterns.",
      gradient: "from-cyan-500 to-emerald-500"
    },
    {
      icon: <Apple className="w-8 h-8" />,
      title: "Food Database",
      description: "Access thousands of foods in our comprehensive database. Find nutritional info for any ingredient or dish.",
      gradient: "from-green-500 to-teal-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div id="feature_page" className="min-h-screen px-8 md:px-24 py-20">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-emerald-500 mb-4">
          Powerful Features
        </h2>
        <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
          Everything you need to track your nutrition and achieve your fitness goals in one powerful app.
        </p>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            className="relative group"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 h-full border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 shadow-lg hover:shadow-emerald-500/20">
              {/* Icon with Gradient Background */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center mt-20"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Transform Your Nutrition?
        </h3>
        <p className="text-slate-400 text-lg mb-8">
          Join thousands of users tracking their macros and achieving their goals.
        </p>
        <button className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-xl bg-emerald-500 hover:bg-emerald-400 px-10 font-bold text-white text-lg duration-500 shadow-xl hover:shadow-emerald-500/50">
          <div className="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0">
            Get Started Free
          </div>
          <div className="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
              <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
            </svg>
          </div>
        </button>
      </motion.div>
    </div>
  );
};

export default FeaturePage;