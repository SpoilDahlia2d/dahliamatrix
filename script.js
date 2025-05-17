const lines = [
  "> Initializing secure terminal...",
  "> Tracing user...",
  "> IP logged successfully.",
  "> Verifying NSFW access clearance...",
  "> Access level: GRANTED",
  "> Unlocking private node...",
  "> Stand by...",
];

let i = 0;
let consoleEl = document.getElementById("console");

function typeLine() {
  if (i < lines.length) {
    consoleEl.innerHTML += lines[i] + "\n";
    i++;

    // Su desktop prova a far partire il vocale alla riga 5
    if (i === 5) {
      const voice = document.getElementById("voice");
      voice.play().catch(() => {
        // Se fallisce (es: mobile), non mostra errore
      });
    }

    setTimeout(typeLine, 1000);
  } else {
    document.getElementById("actions").style.display = "block";
  }
}

window.onload = typeLine;