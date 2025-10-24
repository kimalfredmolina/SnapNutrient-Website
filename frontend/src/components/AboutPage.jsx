import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Target, Sparkles, Award, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { number: "50K+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "1M+", label: "Meals Tracked", icon: <Target className="w-6 h-6" /> },
    { number: "95%", label: "Success Rate", icon: <Award className="w-6 h-6" /> },
    { number: "4.8★", label: "App Rating", icon: <Sparkles className="w-6 h-6" /> }
  ];

  const values = [
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Health First",
      description: "We believe that good nutrition is the foundation of a healthy lifestyle. Our mission is to make tracking your macros simple and accessible for everyone.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Community Driven",
      description: "Built by fitness enthusiasts for fitness enthusiasts. We listen to our community and continuously improve based on your feedback and needs.",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Results Oriented",
      description: "We're committed to helping you achieve your fitness goals. Track your progress, maintain consistency, and see real results with our powerful tools.",
      gradient: "from-teal-500 to-emerald-500"
    }
  ];

  return (
    <div id="about_page" className="min-h-screen px-8 md:px-24 py-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-emerald-500 mb-6">
          About SnapNutrient
        </h2>
        <p className="text-slate-400 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
          Empowering individuals to take control of their nutrition journey with intelligent tracking, 
          personalized insights, and a community that supports your goals.
        </p>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24 max-w-6xl mx-auto"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 shadow-lg hover:shadow-emerald-500/20"
          >
            <div className="flex justify-center mb-3 text-emerald-400">
              {stat.icon}
            </div>
            <div className="text-3xl md:text-4xl font-extrabold text-white mb-2">
              {stat.number}
            </div>
            <div className="text-slate-400 text-sm font-medium">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Story Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mb-24 max-w-4xl mx-auto"
      >
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Story
          </h3>
          <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
            <p>
              SnapNutrient was born from a simple idea: nutrition tracking should be effortless, 
              accurate, and accessible to everyone. We noticed that most people struggle to maintain 
              their fitness goals because tracking macros felt like a chore.
            </p>
            <p>
              Our team of developers, nutritionists, and fitness enthusiasts came together to create 
              a solution that combines cutting-edge AI technology with an intuitive user experience. 
              The result? An app that makes tracking your nutrition as easy as taking a photo.
            </p>
            <p>
              Today, we're proud to help thousands of users achieve their health and fitness goals. 
              Whether you're building muscle, losing weight, or simply eating healthier, SnapNutrient 
              is your trusted companion on the journey.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Values Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mb-24"
      >
        <h3 className="text-4xl md:text-5xl font-extrabold text-center text-emerald-500 mb-12">
          Our Values
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 shadow-lg hover:shadow-emerald-500/20 group"
            >
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {value.icon}
                </div>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                {value.title}
              </h4>
              <p className="text-slate-400 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto"
      >
        <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-3xl p-12 border border-emerald-500/20 shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Our Mission
          </h3>
          <p className="text-slate-300 text-lg leading-relaxed">
            To revolutionize the way people approach nutrition by providing innovative, 
            user-friendly tools that make healthy eating simple, sustainable, and successful. 
            We're here to support you every step of the way.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;