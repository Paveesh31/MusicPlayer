const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const stopBtn = document.getElementById('stopBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentTrack = 0;

const tracks = [ 'music/bv.mp3', 'music/leo.mp3'];

function playPause() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseBtn.textContent = 'Play';
    }
}

function stop() {
    audio.pause();
    audio.currentTime = 0;
    playPauseBtn.textContent = 'Play';
}

function prevTrack() {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    audio.src = tracks[currentTrack];
    audio.play();
    playPauseBtn.textContent = 'Pause';
}

function nextTrack() {
    currentTrack = (currentTrack + 1) % tracks.length;
    audio.src = tracks[currentTrack];
    audio.play();
    playPauseBtn.textContent = 'Pause';
}

playPauseBtn.addEventListener('click', playPause);
stopBtn.addEventListener('click', stop);
prevBtn.addEventListener('click', prevTrack);
nextBtn.addEventListener('click', nextTrack);
