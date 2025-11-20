import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code, Users, Heart,  ArrowLeft } from "lucide-react";
import profile1 from "../../assets/kim.jpg"
import profile2 from "../../assets/jonel.jpg"
import profile3 from "../../assets/laurence.jpg"
import profile4 from "../../assets/jonathan.jpg"

const Developers = () => {
  const developers = [
    {
      name: "Kim Alfred A. Molina",
      role: "Full Stack Developer",
      avatar: profile1,
      bio: "Passionate about building scalable web applications and exploring new technologies.",
      github: "https://github.com/kimalfredmolina",
      linkedin: "https://www.linkedin.com/in/kim-alfred-molina-323455276/",
      email: "kimalfredmolina1224@gmail.com"
    },
    {
      name: "Jonel Peñaflor",
      role: "UI/UX Designer, Frontend Developer",
      avatar: profile2,
      bio: "Designing intuitive interfaces that users love to interact with.",
      github: "https://github.com/Jp-22-00540",
      linkedin: "#",
      email: "#"
    },
    {
      name: "Laurence Deocareza",
      role: "Machine Learning Engineer, Backend Developer",
      avatar: profile3,
      bio: "Training models to make nutrition tracking smarter and more accurate.",
      github: "https://github.com/laurencedeocareza",
      linkedin: "#",
      email: "#"
    },
    {
      name: "Jonathan Bermas",
      role: "Machine Learning Engineer",
      avatar: profile4,
      bio: "Implementing cutting-edge ML algorithms to enhance app functionality.",
      github: "https://github.com/bermasjonathan",
      linkedin: "#",
      email: "#"
    }
  ];

  const stats = [
    { icon: <Code className="w-6 h-6" />, label: "Lines of Code", value: "50K+" },
    { icon: <Users className="w-6 h-6" />, label: "Team Members", value: developers.length.toString() },
    { icon: <Heart className="w-6 h-6" />, label: "Passion", value: "100%" }
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
            <Users className="w-10 h-10 text-white" />
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-emerald-500 mb-4">
          Meet the Team
        </h1>
        <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
          The passionate developers behind SnapNutrient, building tools to help you achieve your health goals.
        </p>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mb-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-4">
                <div className="text-white">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Developers Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {developers.map((dev, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 shadow-2xl hover:border-emerald-500/50 transition-all duration-300 hover:scale-105"
            >
              {/* Avatar */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-emerald-500/30 group-hover:border-emerald-500 transition-all duration-300">
                  <img 
                    src={dev.avatar} 
                    alt={dev.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full">
                  <Code className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Info */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{dev.name}</h3>
                <p className="text-emerald-400 font-semibold mb-3">{dev.role}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{dev.bio}</p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                <a
                  href={dev.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-700/50 hover:bg-emerald-500 flex items-center justify-center transition-all duration-300 group/icon"
                >
                  <Github className="w-5 h-5 text-slate-400 group-hover/icon:text-white transition-colors" />
                </a>
                <a
                  href={dev.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-700/50 hover:bg-emerald-500 flex items-center justify-center transition-all duration-300 group/icon"
                >
                  <Linkedin className="w-5 h-5 text-slate-400 group-hover/icon:text-white transition-colors" />
                </a>
                <a
                  href={`mailto:${dev.email}`}
                  className="w-10 h-10 rounded-lg bg-slate-700/50 hover:bg-emerald-500 flex items-center justify-center transition-all duration-300 group/icon"
                >
                  <Mail className="w-5 h-5 text-slate-400 group-hover/icon:text-white transition-colors" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Back to Home Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a href="/">
            <button className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-xl bg-emerald-500 hover:bg-emerald-400 px-8 font-bold text-white text-lg duration-500 shadow-xl hover:shadow-emerald-500/50">
              <div className="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0">
                Back to Home
              </div>
              <div className="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
                <ArrowLeft className="h-6 w-6" />
              </div>
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Developers;