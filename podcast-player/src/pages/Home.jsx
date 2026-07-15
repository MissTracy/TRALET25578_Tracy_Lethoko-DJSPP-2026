

import styles from "../App.module.css";
import { genres } from "../data";
import SearchBar from "../components/SearchBar";
import SortSelect from "../components/SortSelect";
import GenreFilter from "../components/GenreFilter";
import PodcastGrid from "../components/PodcastGrid";
import Pagination from "../components/Pagination";
import { useContext } from "react";
import {
  PodcastContext,
  SORT_OPTIONS,
} from "../context/PodcastContext";
import Carousel from "../components/Carousel";

/**
 * Home page component.
 *
 * Displays the podcast catalogue along with search, sorting,
 * filtering, pagination, and loading/error states.
 *
 * @param {{loading: boolean, error: string | null}} props
 * @returns {JSX.Element}
 */
export default function Home({ loading, error })  {

  const { sortKey, setSortKey } =
  useContext(PodcastContext);

  return (
    <>
        <main className={styles.main}>
        <Carousel />
          <section className={styles.controls}>
            <SearchBar /> 
            <GenreFilter genres={genres} />
            <SortSelect
              value={sortKey}
              onChange={setSortKey}
              options={SORT_OPTIONS}
            />
          </section>

          {loading && (
            <div className={styles.messageContainer}>
              <div className={styles.spinner}></div>
              <p>Loading podcasts...</p>
            </div>
          )}

          {error && (
            <div className={styles.message}>
              <div className={styles.error}>
                Error occurred while fetching podcasts: {error}
              </div>
            </div>
          )}

          {!loading && !error && (
            <>
              <PodcastGrid genres={genres} />
              <Pagination />
            </>
          )}
        </main>
    </>
  );
}

