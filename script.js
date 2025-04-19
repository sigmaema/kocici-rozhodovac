const odpovedi = [
    "Ano",
    "Ne",
    "Možná...",
    "Určitě!",
    "Zeptej se znovu ",
  ];
  
  document.getElementById("cudlik").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * odpovedi.length);
    const vybranaOdpoved = odpovedi[randomIndex];
    document.getElementById("kociciRozhodnuti").textContent = "Velmi chytrá kočička hlubokého uvažování a veškerého vědění vybrala tuto odpověď na tvou jistě smysluplnou a inteligentní otázku:";
    document.getElementById("kociciRozhodnuti2").textContent = vybranaOdpoved
    
    const obrazky = [
      "https://i.pinimg.com/474x/19/08/77/190877aeeef85934b9f81d2f66498cba.jpg",
      "https://i.pinimg.com/474x/11/5b/5e/115b5e94608b47cc2a1c73ac3999196f.jpg",
      "https://i.pinimg.com/474x/c2/18/8b/c2188b583d5b233e5f02f24c0cb4d5d5.jpg",
      "https://i.pinimg.com/474x/e9/b3/c0/e9b3c0e563685f9c12de973d3bf66f9d.jpg",
      "https://i.pinimg.com/736x/83/3f/d4/833fd4a370f44cb3073af793ba7fa580.jpg",
    ];
    const randomObrazek = obrazky[randomIndex];
    document.getElementById("obrazekKocicky").src = randomObrazek;
  });
  