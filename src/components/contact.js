import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Swal from "sweetalert2";
const ContactPage = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let errors = {};

    // Regex untuk validasi
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,15}$/;

    // Validasi Nama
    if (!formData.name.trim()) {
      errors.name = "Name is required.";
    } else if (!nameRegex.test(formData.name)) {
      errors.name = "Name can only contain letters and spaces.";
    }

    // Validasi Email
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Invalid email format.";
    }

    // Validasi Telepon
    if (!formData.phone.trim()) {
      errors.phone = "Phone is required.";
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = "Phone must be 10-15 digits.";
    }

    // Validasi Pesan
    if (!formData.message.trim()) {
      errors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters.";
    }

    setErrors(errors);

    // Mengembalikan true jika tidak ada error
    return Object.keys(errors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Tidak mengirim email jika ada error
    }

    emailjs
      .sendForm(
        "service_95klczp", // Ganti dengan Service ID Anda
        "template_kz6ql1f", // Ganti dengan Template ID Anda
        form.current,
        "2rE4OkeBhFnjqkSeT" // Ganti dengan Public Key Anda
      )
      .then(
        () => {
          console.log("SUCCESS!");
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Your message has been sent successfully.",
          });
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong. Please try again later.",
          });
        }
      );
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center relative z-20">
      <div className="container mx-auto p-8">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Bagian Kiri: Informasi Kontak */}
          <div className="w-full md:w-3/5 bg-slate-100 p-8 text-green-800 text-start">
            <h2 className="text-5xl font-bold mb-4">Contact Information</h2>
            <div className="mb-4">
              <h3 className="font-semibold">Email</h3>
              <p>tiarapandi25@gmail.com</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">Phone</h3>
              <p>+62 896 3777 4178</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">Social Media</h3>
              <div className="flex space-x-4">
                <a
                  className="relative w-12 h-12 rounded-full group"
                  href="https://www.instagram.com/tiarapnd_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="floater w-full h-full absolute top-0 left-0 bg-green-800 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                  <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-green-800 rounded-full md:text-green-800 text-white hover:text-green-800 duration-300">
                    <FaInstagram size={24} />
                  </div>
                </a>
                <a
                  className="relative w-12 h-12 rounded-full group"
                  href="https://www.instagram.com/tiarapnd_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="floater w-full h-full absolute top-0 left-0 bg-green-800 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                  <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-green-800 rounded-full text-green-800 hover:text-green-800 duration-300">
                    <FaInstagram size={24} />
                  </div>
                </a>
                <a
                  className="relative w-12 h-12 rounded-full group"
                  href="https://www.instagram.com/tiarapnd_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="floater w-full h-full absolute top-0 left-0 bg-green-800 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                  <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-green-800 rounded-full text-green-800 hover:text-green-800 duration-300">
                    <FaInstagram size={24} />
                  </div>
                </a>
                <a
                  className="relative w-12 h-12 rounded-full group"
                  href="https://www.instagram.com/tiarapnd_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="floater w-full h-full absolute top-0 left-0 bg-green-800 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                  <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-green-800 rounded-full text-green-800 hover:text-green-800 duration-300">
                    <FaInstagram size={24} />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Bagian Kanan: Formulir Kontak */}
          <div className="w-full md:w-2/5 p-8 text-start">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="example: John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example: 7sC5A@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700">Phone</label>
                <input
                  type="number"
                  name="phone"
                  placeholder="example: 08123456789"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="example: Hi, I'm interested in your product..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
