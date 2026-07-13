import { useContext } from "react";
import { AudioPlayerContext } from "../context/AudioPlayerContext";

export default function AudioPlayer() {
  const {
    currentEpisode,
    isPlaying,
    playEpisode,
    pauseEpisode,
  } = useContext(AudioPlayerContext);

  return (
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "1rem",
        background: "#222",
        color: "#fff",
      }}
    >
      {!currentEpisode ? (
        <p>No episode selected</p>
      ) : (
        <>
          <h3>{currentEpisode.title}</h3>

          <button
            onClick={() =>
              isPlaying
                ? pauseEpisode()
                : playEpisode(currentEpisode)
            }
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
        </>
      )}
    </footer>
  );
}