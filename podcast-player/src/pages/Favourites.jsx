import { useContext, useMemo, useState } from "react";
import { FavouriteContext } from "../context/FavouriteContext";
import FavouriteDateSort from "../components/FavouriteDateSort";
import SortSelect from "../components/SortSelect";
import styles from "./Favourites.module.css";
import { AudioPlayerContext } from "../context/AudioPlayerContext";
import { FaHeart, FaRegHeart, FaPlay } from "react-icons/fa";



const TITLE_SORT_OPTIONS = [
  {
    key: "az",
    label: "A–Z",
  },
  {
    key: "za",
    label: "Z–A",
  },
];

export default function Favourites() {
//   const { favourites } = useContext(FavouriteContext);

  const [dateSort, setDateSort] = useState("newest");
  const [titleSort, setTitleSort] = useState("az");

  const [expandedShows, setExpandedShows] = useState({});
  const { playEpisode } = useContext(AudioPlayerContext);

    const { favourites, toggleFavourite } =
    useContext(FavouriteContext);
  

  function toggleShow(showTitle) {
    setExpandedShows((prev) => ({
      ...prev,
      [showTitle]: !prev[showTitle],
    }));
  }

  const groupedFavourites = useMemo(() => {
    const groups = {};

    favourites.forEach((episode) => {
      if (!groups[episode.podcastTitle]) {
        groups[episode.podcastTitle] = [];
      }

      groups[episode.podcastTitle].push(episode);
    });

    let grouped = Object.entries(groups);

    grouped.sort(([, episodesA], [, episodesB]) => {
      const newestA = Math.max(
        ...episodesA.map((episode) => new Date(episode.addedAt))
      );

      const newestB = Math.max(
        ...episodesB.map((episode) => new Date(episode.addedAt))
      );

      return dateSort === "newest"
        ? newestB - newestA
        : newestA - newestB;
    });

    return grouped;
  }, [favourites, dateSort]);

  function formatFavouriteDate(date) {
    return new Date(date).toLocaleString("en-ZA", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return (
    <main className={styles.container}>
      <h1>Favourite Episodes</h1>

      <p className={styles.subtitle}>
        Your saved episodes from all shows
      </p>

      <div className={styles.filters}>
        <p>Sort by:</p>
        <FavouriteDateSort
          value={dateSort}
          onChange={setDateSort}
        />

        <SortSelect
          value={titleSort}
          onChange={setTitleSort}
          options={TITLE_SORT_OPTIONS}
        />
      </div>

      {favourites.length === 0 ? (
        <p>No favourites yet.</p>
      ) : (
        groupedFavourites.map(([podcastTitle, episodes]) => (
          <section
            key={podcastTitle}
            className={styles.group}
          >
            <div className={styles.groupHeader}>
              <img
                src={episodes[0].image}
                alt={podcastTitle}
                className={styles.cover}
              />

              <div className={styles.groupInfo}>
                <h2>{podcastTitle}</h2>

                <p>
                  {episodes.length} Episode
                  {episodes.length !== 1 ? "s" : ""} Saved
                </p>
              </div>

              <button
                className={styles.toggleButton}
                onClick={() => toggleShow(podcastTitle)}
              >
                {expandedShows[podcastTitle]
                  ? "▲ Hide Episodes"
                  : "▼ View Episodes"}
              </button>
            </div>

            {expandedShows[podcastTitle] && (
              <div className={styles.episodeList}>
                {[...episodes]
                  .sort((a, b) =>
                    titleSort === "az"
                      ? a.title.localeCompare(b.title)
                      : b.title.localeCompare(a.title)
                  )
                  .map((episode) => (
                    <div
                      key={episode.id}
                      className={styles.episodeCard}
                    >
                      <img
                        src={episode.image}
                        alt={episode.title}
                        className={styles.episodeImage}
                      />

                      <div className={styles.episodeContent}>
                        <div className={styles.episodeTop}>
                   

                        <p className={styles.episodeMeta}>
                        Season {episode.seasonNumber} • Episode {episode.episodeNumber}
                        </p>

                        <button
                          type="button"
                          className={styles.heartButton}
                          onClick={() => toggleFavourite(episode)}
                        >
                          <FaHeart data-favourite="true" />
                        </button>       
                        
                      </div>

                      <div className={styles.episodeInfo}>

                          <h3>{episode.title}</h3>

                          <p>{episode.seasonTitle}</p>

                          <p className={styles.date}>
                          Added {formatFavouriteDate(episode.addedAt)}
                          </p>

                          <div className={styles.episodeBottom}>

                          <button
                              className={styles.playButton}
                              onClick={() => playEpisode(episode)}
                          >
                            <FaPlay />
                            Play
                        </button>
                        </div>
                      </div>
                   </div>
                </div>
                    
                  ))}
              </div>
            )}
          </section>
        ))
      )}
    </main>
  );
}