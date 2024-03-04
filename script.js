const inputs = document.querySelectorAll('.player__slider');
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");

toggle.addEventListener("click", togglePlay);

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
video.addEventListener("timeupdate", handleProgress);

skipButtons.forEach(skipButton => skipButton.addEventListener("click", forwardOrBackward));

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function handleProgress() {
  const currentProgress = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${currentProgress}%`;
}

function forwardOrBackward(event) {
  const skipAmount = parseFloat(event.target.dataset.skip);
  video.currentTime += skipAmount;
}

function handleUpdate() {
  video[this.name] = this.value;
}
