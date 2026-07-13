// will store the audio player state.

import { createContext, useEffect, useRef, useState } from "react";

export const AudioPlayerContext = createContext();

export function AudioPlayerProvider({ children }) {
  const audioRef = useRef(new Audio());

  const [currentEpisode, setCurrentEpisode] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    const audio = audioRef.current;
  
    function updateTime() {
      setCurrentTime(audio.currentTime);
    }
  
    function loadedMetadata() {
      setDuration(audio.duration);
    }
  
    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", loadedMetadata);
  
    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", loadedMetadata);
    };
  }, []);



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

  function seek(time) {
    audioRef.current.currentTime = time;
  }

  return (
    <AudioPlayerContext.Provider
      value={{
        currentEpisode,
        isPlaying,
        
        playEpisode,
        pauseEpisode,
        
        currentTime,
        duration,
      
        seek,
      
        audioRef,
        audioRef,
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
}