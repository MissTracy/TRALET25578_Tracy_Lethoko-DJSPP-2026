# 🎙️ Podcast App

A modern podcast discovery application built with **React** and **Vite**.

The application allows users to browse podcasts, search and filter by genre, sort shows, view detailed podcast information, play episode previews, save favourite episodes, switch between light and dark themes, and discover new podcasts through a recommended shows carousel.

---

# Features

## Home Page

- Browse all available podcasts
- Search podcasts by title
- Filter podcasts by genre
- Sort podcasts by:
  - Newest
  - Oldest
  - Title A–Z
  - Title Z–A
- Responsive podcast grid
- Pagination

## Podcast Details

- View complete podcast information
- Genre tags
- Number of seasons
- Number of episodes
- Last updated date
- Expand seasons
- View episodes
- Play episode previews
- Favourite episodes

## Audio Player

- Persistent audio player
- Play / Pause controls
- Seek bar
- Episode information
- Playback timer

## Favourites

- Save favourite episodes
- Remove favourites
- Sort favourites by date added
- Group episodes by podcast
- Expand and collapse saved episodes
- Resume playback directly from favourites

## Recommended Shows

- Displays recommended podcasts
- Fisher-Yates shuffle algorithm
- Infinite looping carousel
- Previous / Next controls
- Opens podcast details on click

## Theme Toggle

- Light mode
- Dark mode
- Theme preference stored in localStorage
- Persistent across browser sessions

---

# Technologies Used

- React
- React Router DOM
- React Context API
- React Icons (Imported)
- Vite
- JavaScript (ES6)
- CSS Modules
- HTML5

---


# Installation

Clone the repository

```bash
git clone <repository-url>
```

Navigate into the project

```bash
cd podcast-app
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Open your browser

```
http://localhost:5173
```

---

# Usage

### Browse Podcasts

Browse the available podcasts on the Home page.

### Search

Use the search bar to search podcasts by title.

### Filter

Filter podcasts by selecting a genre.

### Sort

Sort podcasts using the dropdown menu.

### View Details

Click any podcast card to open its detail page.

### Play Episodes

Expand a season and click **Play** to start the episode preview.

### Save Favourites

Click the heart icon to save an episode.

### View Favourites

Open the Favourites page to manage saved episodes.

### Change Theme

Click the sun/moon icon in the header to switch between light and dark mode.

---

# State Management

The application uses the React Context API.

Contexts include:

- PodcastContext
- FavouriteContext
- AudioPlayerContext
- ThemeContext

---

# Data Source

Podcast information is provided by  API.

---

