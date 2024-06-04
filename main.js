// Esercizio 1:

// Creare 3 paragrafi in HTML e 3 bottoni.

// Il primo bottone dovrà nascondere i 3 paragrafi e farli ricomparire (quale classe di bootstrap potrebbe farlo?)
// il secondo bottone dovrà cambiare i colori dei paragrafi in maniera casuale
// il terzo bottone dovrà rendere i paragrafi in grassetto e farli tornare come prima.

// let paragrafi = document.querySelectorAll("p");
// let btnNascondi = document.querySelector("#btnNascondi");
// let btnRandom = document.querySelector("#btnRandom");
// let btnBold = document.querySelector("#btnBold");

// btnNascondi.addEventListener("click", ()=> {
//     paragrafi.forEach(p => {
//         p.classList.toggle("d-none")
//     });
// });

// btnRandom.addEventListener("click", ()=> {
//     let r = Math.floor(Math.random(0)*255);
//     let g = Math.floor(Math.random(0)*255);
//     let b = Math.floor(Math.random(0)*255);
//     paragrafi.forEach(p => {
//         p.style.color=
//         `rgb(${r}, ${g}, ${b})`;
//     });
// });

// btnBold.addEventListener("click", ()=> {
//     paragrafi.forEach(p => {
//         p.classList.toggle("fw-bold")
//     });
// });

// Esercizio 2: (extra)
// Provare a creare delle card di Bootstrap dinamicamente con Javascript
// (ricordate createElement() e appendChild()
// Se vi avanza del tempo, in piattaforma trovate un video con 50
// esercizi di javascript con anche le varie soluzioni.
// Dopo la spiegazione della traccia provate a fare autonomamente l'esercizio e controllate poi la soluzione.

