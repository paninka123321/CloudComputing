import React from "react";
import "./PsychoSphere.css";

const PsychoSphere = () => {
  return (
    <div className="psychosfera-container">
      <h1>Aktualności ze świata psychologii</h1>

      <section className="psych-section">
        <h2>Psychologia dziecięca</h2>
        <p>
          Najnowsze badania wskazują na znaczenie bezpiecznego przywiązania i jego wpływu na rozwój emocjonalny dziecka.
          Eksperci podkreślają też rolę zabawy w kształtowaniu zdolności społecznych i poznawczych najmłodszych.
        </p>
        <blockquote>
          „Dziecko potrzebuje nie tylko bezpieczeństwa, ale też relacji, w której czuje się ważne.” – <strong>dr Anna Kowalska</strong>, psycholog dziecięcy
        </blockquote>
      </section>

      <section className="psych-section">
        <h2>ADHD</h2>
        <p>
          U dzieci z ADHD obserwuje się poprawę koncentracji dzięki terapii poznawczo-behawioralnej oraz odpowiedniej strukturze dnia.
          Nowe leki o wydłużonym działaniu zmniejszają skutki uboczne i poprawiają funkcjonowanie w szkole.
        </p>
        <blockquote>
          „Struktura i rutyna to kluczowe elementy w terapii dzieci z ADHD.” – <strong>prof. Marek Wysocki</strong>, psychiatra dziecięcy
        </blockquote>
      </section>

      <section className="psych-section">
        <h2>Autyzm</h2>
        <p>
          Coraz więcej badań wspiera wczesną diagnozę autyzmu – już u 18-miesięcznych dzieci można wykryć istotne symptomy.
          Terapie skoncentrowane na komunikacji i relacji z opiekunem przynoszą bardzo dobre efekty rozwojowe.
        </p>
        <blockquote>
          „Wczesna interwencja zwiększa szanse dziecka na samodzielne funkcjonowanie.” – <strong>dr Katarzyna Zawadzka</strong>, neurologopeda
        </blockquote>
      </section>
    </div>
  );
};

export default PsychoSphere;
