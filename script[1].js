const audio = document.getElementById("audio");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const volume = document.getElementById("volume");
const status = document.getElementById("status");
const card = document.querySelector(".card");

audio.loop = true;

start.addEventListener("click", async () => {
  try {
    await audio.play();
    card.classList.add("playing");
    status.textContent = "🔊 Sound playing • Loop ON";
    start.textContent = "🔊 Sound Playing";
  } catch (error) {
    status.textContent = "Unable to start playback.";
  }
});

stop.addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0;
  card.classList.remove("playing");
  status.textContent = "Stopped";
  start.textContent = "▶ Start Sound";
});

volume.addEventListener("input", () => {
  audio.volume = Number(volume.value);
});

audio.addEventListener("ended", () => {
  if (audio.loop) audio.play();
});
