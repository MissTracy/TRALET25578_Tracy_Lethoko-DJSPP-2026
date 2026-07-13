import { useContext } from "react";
import { FavouriteContext } from "../context/FavouriteContext";

export default function Favourites() {
  const { favourites } = useContext(FavouriteContext);

  return (
    <main>
      <h1>Favourites</h1>

      {favourites.length === 0 ? (
        <p>No favourites yet.</p>
      ) : (
        favourites.map((episode) => (
          <div key={episode.id}>
            <h3>{episode.title}</h3>

            <p>{episode.podcastTitle}</p>

            <p>{episode.seasonTitle}</p>
          </div>
        ))
      )}
    </main>
  );
}