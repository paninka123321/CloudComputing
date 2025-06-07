import React from "react";
import "./PsychoSphere.css"; // Reużywamy wspólne style

const AboutUs = () => {
  return (
    <div className="psychosfera-container">
      <h1>O nas</h1>

      <div className="psych-section">
        <h2>Nasza misja</h2>
        <p>
          Neurodetective powstało z potrzeby stworzenia narzędzia, które
          realnie wspiera dialog między rodzicem a nauczycielem. Naszym celem
          jest usprawnienie komunikacji, aby każde dziecko mogło rozwijać się w
          bezpiecznym i wspierającym środowisku.
        </p>
        <p>Skontaktuj się z nami! info@psychodetective.pl</p>
      </div>

      <div className="psych-section">
        <h2>Dla kogo stworzyliśmy tę platformę?</h2>
        <p>
          Dla nauczycieli, którzy chcą szybciej reagować na potrzeby uczniów. Dla
          rodziców, którzy szukają zrozumienia i chcą być aktywną częścią procesu
          edukacyjnego. I przede wszystkim – dla dzieci.
        </p>
      </div>

      <div className="psych-section">
        <h2>Co nas napędza?</h2>
        <p>
          Ambicja, pasja do technologii edukacyjnej oraz chęć zbudowania
          mostu między dwoma światami: szkolnym i domowym. Wierzymy, że razem
          możemy tworzyć przyszłość edukacji bardziej empatyczną i skuteczną.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
