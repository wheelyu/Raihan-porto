// SkillSection.js
import React from "react";
import Swal from "sweetalert2";
import AOS from "aos";
import { FaGitAlt } from "react-icons/fa"; // Ikon contoh
import { FaUsers, FaComments, FaPeopleCarry } from "react-icons/fa";
const skills = [
  {
    name: "Comunicate",
    icon: <FaUsers />,
    description: "Kemampuan komunikasi yang baik ",
  },
  {
    name: "Relation",
    icon: <FaComments />,
    description: "Kemampuan dalam menjalin relasi hubungan ",
  },
  {
    name: "Organization",
    icon: <FaPeopleCarry />,
    description:
      "Kemampuan berorganisasi dan bertanggung jawab dalam kegiatan ",
  },
  {
    name: "Adapt",
    icon: <FaGitAlt />,
    description: "Kemampuan adaptasi yang baik ",
  },
];

const SkillSection = () => {
  // Fungsi untuk menampilkan modal dengan SweetAlert2
  const showSkillInfo = (skill) => {
    Swal.fire({
      title: skill.name,
      text: skill.description,
      icon: "info",
      confirmButtonText: "OK",
    });
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-green-800 to-slate-100 p-8 relative z-20 mt-[-3px]"
      id="skill"
    >
      <h2 className="text-8xl font-bold text-center mb-8 pt-56 pb-8">
        My Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <button
            key={index}
            onClick={() => showSkillInfo(skill)}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            className="flex flex-col items-center justify-center p-6 text-black border-black md:text-green-400 hover:text-white border md:border-green-400 hover:border-white border-b-8 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-8 hover:border-b active:opacity-75 outline-none duration-300 group"
          >
            <div className="text-6xl mb-2">{skill.icon}</div>
            <span className="text-lg font-semibold">{skill.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
