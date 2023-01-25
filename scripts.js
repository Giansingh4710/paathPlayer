
const tracksPlayed = [];
let currentTrackPointer = -1;

function playNextTrack() {
  document.getElementById("playNext").innerHTML = "Next &rarr;";
  if (tracksPlayed.length - 1 == currentTrackPointer) {
    playRandTrack();
    return;
  }
  currentTrackPointer += 1;
  playTrack(tracksPlayed[currentTrackPointer]);
}

function playPreviousTrack() {
  if (currentTrackPointer < 1) {
    return;
  }
  currentTrackPointer -= 1;
  playTrack(tracksPlayed[currentTrackPointer]);
}

function playRandTrack() {
  const randNum = Math.floor(Math.random() * TRACK_LINKS.length);
  tracksPlayed.push(randNum);
  currentTrackPointer += 1;
  playTrack(randNum);
}

function playTrack(trkInd) {
  const h4 = document.getElementById("trackMsg");
  h4.innerText = "";
  const playerDiv = document.getElementById("trackPlaying");
  const theLinkOfTrack = TRACK_LINKS[trkInd];
  const theNameOfTrack = getNameOfTrack(theLinkOfTrack);
  console.log(theNameOfTrack)
  playerDiv.innerHTML = `
    <h3>
        <a 
          href=${theLinkOfTrack.replaceAll( " ", "%20")} 
          target="_blank"
          rel="noopener noreferrer"
        >
            ${theNameOfTrack}
        </a>
    </h3>
    <audio onended="playNextTrack()" onerror="playNextTrack()"  type="audio/mpeg" controls autoPlay={true} src='${theLinkOfTrack}' ></audio>`
}

