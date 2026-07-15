import { createContext, useEffect, useState } from "react";

/*
* Context for managing favourite podcast episodes.
*/
export const FavouriteContext = createContext();


/**
 * Provides favourite episode functionality to the app.
 *
 * @param {{children: React.ReactNode}} props
 * @returns {JSX.Element}
 */
export function FavouriteProvider({ children }) {
  const [favourites, setFavourites] = useState(() => {
    const saved = localStorage.getItem("favourites");
    return saved ? JSON.parse(saved) : [];
  });

  /**
 * Loads saved favourites from localStorage.
 */
  useEffect(() => {
    localStorage.setItem(
      "favourites",
      JSON.stringify(favourites)
    );
  }, [favourites]);

  /**
 * Adds or removes an episode from favourites.
 *
 * @param {Object} episode - Episode to update.
 */
  function toggleFavourite(episode) {
    const exists = favourites.some(
      (fav) => fav.id === episode.id
    );

    if (exists) {
      setFavourites(
        favourites.filter(
          (fav) => fav.id !== episode.id
        )
      );
    } else {
      setFavourites([
        ...favourites,
        {
          ...episode,
          addedAt: new Date().toISOString(),
        },
      ]);
    }
  }

  /**
 * Checks whether an episode is a favourite.
 *
 * @param {string} id - Episode ID.
 * @returns {boolean}
 */
  function isFavourite(id) {
    return favourites.some(
      (fav) => fav.id === id
    );
  }

  return (
    <FavouriteContext.Provider
      value={{
        favourites,
        toggleFavourite,
        isFavourite,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
}