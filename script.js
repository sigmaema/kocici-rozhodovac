const odpovedi = [
    "Ano",
    "Ne",
    "Možná...",
    "Určitě!",
    "Zeptej se znovu ",
];
const obrazky = {
    kocicky: ["https://i.pinimg.com/474x/19/08/77/190877aeeef85934b9f81d2f66498cba.jpg",
        "https://i.pinimg.com/474x/28/f8/34/28f83445f403c3b03465f438911f5e18.jpg",
        "https://i.pinimg.com/474x/c2/18/8b/c2188b583d5b233e5f02f24c0cb4d5d5.jpg",
        "https://i.pinimg.com/474x/e9/b3/c0/e9b3c0e563685f9c12de973d3bf66f9d.jpg",
        "https://i.pinimg.com/736x/83/3f/d4/833fd4a370f44cb3073af793ba7fa580.jpg",],
    pejsci: [
        "https://i.pinimg.com/474x/bd/f0/1a/bdf01a8fa45011429ff35deb3f60c0b2.jpg",
        "https://i.pinimg.com/474x/e4/aa/08/e4aa088792352186066cce762eddedba.jpg",
        "https://i.pinimg.com/474x/b0/f3/15/b0f3151e23d41d219264f7c2fc265525.jpg",
        "https://i.pinimg.com/474x/8e/d8/29/8ed829e9dd85e8cd15bcc9427c3aff96.jpg",
        "https://i.pinimg.com/474x/36/a6/0e/36a60e4e5d0dc95c365fc56d3400960f.jpg",
    ],
    kralicci: [
        "https://i.pinimg.com/474x/d1/01/79/d101794dff8e1774d2a206ed4e72a644.jpg",
        "https://i.pinimg.com/474x/b2/89/c6/b289c6ab7776572b7efcd5477b2bf8d8.jpg",
        "https://i.pinimg.com/474x/7f/43/e3/7f43e3e050b0e7b5d184961f539a434c.jpg",
        "https://i.pinimg.com/474x/28/9c/17/289c1725a127c4f2e6a3d8485bb3da05.jpg",
        "https://i.pinimg.com/474x/fa/cb/93/facb93682981c8fe28aa109268f75441.jpg",
    ],
    kuzlatka: [
        "https://i.pinimg.com/474x/26/5f/5e/265f5ecf4d5dfa6a334806f633c72613.jpg",
        "https://i.pinimg.com/474x/c6/a6/e5/c6a6e5efcd9d4e659be0400abf0ba90e.jpg",
        "https://i.pinimg.com/474x/20/72/59/207259adfcd7b51d68819eb155cacb09.jpg",
        "https://i.pinimg.com/474x/60/de/9f/60de9f82bf654b8b13e96a54c9b6a96a.jpg",
        "https://i.pinimg.com/474x/cc/55/a4/cc55a4d0656d138dde43b10be8bbc7c3.jpg",
    ]
};

document.getElementById("cudlik").addEventListener("click", () => {
    const vybraneZvire = document.getElementById("vyberZviratko").value;
  
    const randomOdpoved = odpovedi[Math.floor(Math.random() * odpovedi.length)];
    const randomObrazek = obrazky[vybraneZvire][Math.floor(Math.random() * obrazky[vybraneZvire].length)];
  
    const introTexty = {
      kocicky: "Velmi chytrá kočička hlubokého uvažování a veškerého vědění vybrala tuto odpověď na tvou jistě smysluplnou a inteligentní otázku:",
      pejsci: "Velmi chytrý pejsek hlubokého uvažování a veškerého vědění vybral tuto odpověď na tvou jistě smysluplnou a inteligentní otázku:",
      kralicci: "Velmi chytrý králíček hlubokého uvažování a veškerého vědění vybral tuto odpověď na tvou jistě smysluplnou a inteligentní otázku:",
      kuzlatka: "Velmi chytré kůzlátko hlubokého uvažování a veškerého vědění vybralo tuto odpověď na tvou jistě smysluplnou a inteligentní otázku:",
    };
  
    document.getElementById("kociciRozhodnuti").textContent = introTexty[vybraneZvire];
    document.getElementById("kociciRozhodnuti2").textContent = randomOdpoved;
    document.getElementById("obrazekKocicky").src = randomObrazek;
  });