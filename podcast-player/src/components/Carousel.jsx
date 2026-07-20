import { useContext, useMemo, useState,useEffect } from "react";
import { PodcastContext } from "../context/PodcastContext";
import { genres } from "../data";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./Carousel.module.css";


/**
 * Displays a carousel of recommended podcasts.
 *
 * Shows four podcasts at a time with automatic
 * and manual navigation.
 *
 * @returns {JSX.Element}
 */
export default function Carousel() {
  const { allPodcasts } = useContext(PodcastContext);

  /**
 * Randomly shuffles podcasts using the
 * Fisher-Yates algorithm and selects 10.
 */
  const recommendations = useMemo(() => {
    const shuffled = [...allPodcasts];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [shuffled[i], shuffled[j]] = [
        shuffled[j],
        shuffled[i],
      ];
    }

    return shuffled.slice(0, 10);
  }, [allPodcasts]);

  

  const [current, setCurrent] = useState(0);

  const visibleCards = 4;
  
  //Moves to the next carousel item
  function next() {
    setCurrent((prev) => (prev + 1) % recommendations.length);
  }
  


  //Moves to the previous carousel item
  function previous() {
    setCurrent((prev) =>
      prev === 0
        ? recommendations.length - 1
        : prev - 1
    );
  }

    // Movevs carousel every 3 seconds.
 
    useEffect(() => {
    if (!recommendations.length) return;
  
    const timer = setInterval(() => {
      next();
    }, 4200);
  
    return () => clearInterval(timer);
  }, [recommendations.length]);
  
  const cards = [];


  for (let i = 0; i < visibleCards; i++) {
    cards.push(
      recommendations[
        (current + i) % recommendations.length
      ]
    );
  }

  

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>Recommended Shows</h2>

        <div className={styles.buttons}>
          <button onClick={previous}>
            <FaChevronLeft />
          </button>

          <button onClick={next}>
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className={styles.carousel}>
      {cards
        .filter(Boolean)
        .map((podcast) =>  (
          <Link
            key={podcast.id}
            to={`/show/${podcast.id}`}
            className={styles.card}
          >
            <img
              src={podcast.image}
              alt={podcast.title}
            />

            <h3>{podcast.title}</h3>

            <div className={styles.tags}>
              {podcast.genres
                .slice(0, 3)
                .map((id) => {
                  const genre = genres.find(
                    (g) => g.id === id
                  );

                  return (
                    <span
                      key={id}
                      className={styles.tag}
                    >
                      {genre?.title}
                    </span>
                  );
                })}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}