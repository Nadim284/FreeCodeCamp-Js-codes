const display = document.getElementById("display");
const drumPads = document.querySelectorAll(".drum-pad");

function playSound(key) {
  const audio = document.getElementById(key);
  if (audio) {
    audio.currentTime = 0;
    audio.play();
    const soundName = audio.parentElement.id;
    display.innerText = soundName;
  }
}

drumPads.forEach(pad => {
  pad.addEventListener("click", () => {
    const key = pad.innerText.trim();
    playSound(key);
  });
});

document.addEventListener("keydown", (event) => {
  const key = event.key.toUpperCase();
  if ("QWEASDZXC".includes(key)) {
    playSound(key);
  }
});
