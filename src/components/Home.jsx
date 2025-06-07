import React from "react";
import "./PsychoSphere.css"; // Reużywamy wspólne style

const Home = () => {
  return (
    <div className="psychosfera-container">
      <h1>Neurodetective</h1>

      <div className="psych-section">
        <h2>O projekcie</h2>
        <p>
          Neurodetective to platforma wspierająca wczesne wykrywanie powikłań psychologii dziecięcej i
          ułatwiająca komunikację pomiędzy rodzicami i nauczycielami.
        </p>
        <blockquote>
          „Współpraca między rodzicem a nauczycielem może zdziałać więcej niż pojedyncze diagnozy.” – 
          <strong> dr hab. Ewa Lis</strong>, pedagog
        </blockquote>
      </div>

      <div className="psych-section">
        <h2>Dostęp do platformy</h2>
        <p>
          Aby kontynuować, zaloguj się jako <strong>nauczyciel</strong> lub <strong>rodzic</strong>. 
          Otrzymasz dostęp do profili uczniów, ich ocen, postępów oraz historii wsparcia psychologicznego.
        </p>
      </div>

      <div className="psych-section">
        <h2>📲 Aplikacja dla uczniów</h2>
        <p>
          Aby zainstalować aplikację dla uczniów, wystarczy zeskanować poniższy kod QR:
        </p>
        <img 
          src="/static-images/kod_qr.png" 
          alt="Kod QR do aplikacji ucznia" 
          style={{ maxWidth: "200px", marginTop: "1rem" }}
        />
      </div>
    </div>
  );
};

export default Home;
