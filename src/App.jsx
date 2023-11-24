function App() {
  const surpiseOptions = [
    "Luffy from one piece activating second gear transformation",
    "Zoro from one piece using three swords style attack",
    "Sanji from one piece activeating his Black Leg Style/Diable Jambe attack",
    "Nami from one piece using her weatherattack tool and creating lightning ball attacks",
    "Tony tony Chopper from one piece Transforming into Monster Point form",
    "Nico Robin from one piece using her special Demonio Fleur ability ",
    "Ussop from one piece using his special explosive star attack",
    "Brook from one piece using his special attack ability seen from the one piece universe",
  ];

  return (
    <div className="app">
      <section className="search-section">
        <p>
          Star with a detailed description
          <span className="surprise">Surprise Me</span>
        </p>
        <div className="input-container">
          <input placeholder="A man relaxing on the moon in a sunbed drinking heinekken" />
          <button>Generate</button>
        </div>
      </section>
      <section className="image-section"></section>
    </div>
  );
}

export default App;
