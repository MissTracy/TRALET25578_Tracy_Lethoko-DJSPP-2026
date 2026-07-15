import { useContext } from "react";
import { AudioPlayerContext } from "../context/AudioPlayerContext";
import styles from "./AudioPlayer.module.css";
import { FaPlay, FaPause, FaBackward, FaForward } from "react-icons/fa";
/**
 * AudioPlayer Component
 *
 * Displays a persistent audio player at the bottom of the application.
 * The player shows the currently selected episode, allows the user to
 * play or pause playback, seek through the episode using a progress bar,
 * and displays the current playback time and total duration.
 *
 * @returns {JSX.Element|null}
 */
export default function AudioPlayer() {
  const {
    currentEpisode,
    isPlaying,
    
    playEpisode,
    pauseEpisode,
    
    currentTime,
    duration,
  
    seek,
  
  } = useContext(AudioPlayerContext);

  if (!currentEpisode) return null;
  function formatTime(seconds) {

    if (!seconds) return "0:00";
  
    const mins = Math.floor(seconds / 60);
  
    const secs = Math.floor(seconds % 60);
  
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  }

  return (
    <footer className={styles.player}>
  
      {/* Lleft side */}
      <div className={styles.info}>
        <img
          src={currentEpisode.image}
          alt={currentEpisode.title}
          className={styles.cover}
        />
  
        <div>
          <h3>{currentEpisode.title}</h3>
          <p>{currentEpisode.podcastTitle}</p>
        </div>
      </div>
  
  
      {/* buttons */}
      <div className={styles.controls}>
  
        <button className={styles.smallButton}>
          <FaBackward />
        </button>
  
        <button
          className={styles.playButton}
          onClick={() =>
            isPlaying
              ? pauseEpisode()
              : playEpisode(currentEpisode)
          }
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
  
        <button className={styles.smallButton}>
          <FaForward />
        </button>
  
      </div>
  
          {/* seek */}
      <div className={styles.progress}>
  
        <span>{formatTime(currentTime)}</span>
  
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={(e) => seek(Number(e.target.value))}
        />
  
        <span>{formatTime(duration)}</span>
  
      </div>
  
  
      <div className={styles.volume}>
        🔊
      </div>
  
    </footer>
  
  );
}