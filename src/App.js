import "./App.css";
import Navbar from "./components/Navbar";
import CustomShapeDivider from "./components/CustomShapeDivider";
import ContentWithImage from "./components/content";
import About from "./components/about";
import Skill from "./components/skill";
import Contact from "./components/contact";
import Footer from "./components/footer";
import React from "react";
import StickyCtaButton from "./components/ctaButton";
import Swal from "sweetalert2";
function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }
  const phoneNumber = "6289637774178"; // Ganti dengan nomor WhatsApp Anda, pastikan menggunakan format internasional
  const message = "Halo! Saya ingin bertanya tentang..."; // Pesan default yang akan dikirim

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank"); // Membuka WhatsApp di tab baru
  };
  return (
    <div className="App">
      <Navbar />
      <ContentWithImage />

      <CustomShapeDivider />
      <About />
      <Skill />
      <Contact />
      <Footer />
      <StickyCtaButton onClick={handleClick} />
    </div>
  );
}

export default App;
