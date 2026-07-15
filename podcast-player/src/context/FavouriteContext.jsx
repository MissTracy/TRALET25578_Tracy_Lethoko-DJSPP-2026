import { createContext, useEffect, useState } from "react";

export const FavouriteContext = createContext();

export function FavouriteProvider({ children }) {
  const [favourites, setFavourites] = useState(() => {
    const saved = localStorage.getItem("favourites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "favourites",
      JSON.stringify(favourites)
    );
  }, [favourites]);

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