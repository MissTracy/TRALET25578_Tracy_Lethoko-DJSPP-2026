// will store the audio player state.

import { createContext, useRef, useState } from "react";

export const AudioPlayerContext = createContext();

export function AudioPlayerProvider({ children }) {
  const audioRef = useRef(new Audio());

  const [currentEpisode, setCurrentEpisode] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function playEpisode(episode) {
    if (audioRef.current.src !== episode.file) {
      audioRef.current.src = episode.file;
    }

    audioRef.current.play();

    setCurrentEpisode(episode);
    setIsPlaying(true);
  }

  function pauseEpisode() {
    audioRef.current.pause();
    setIsPlaying(false);
  }

  return (
    <AudioPlayerContext.Provider
      value={{
        currentEpisode,
        isPlaying,
        playEpisode,
        pauseEpisode,
        audioRef,
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
}