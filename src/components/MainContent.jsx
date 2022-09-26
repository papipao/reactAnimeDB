import React from "react";
import AnimeCard from "./AnimeCard";

function MainContent(props) {
  return (
    <main>
      <div className="main-head">
        <form onSubmit={props.handleSearch} className="search-box">
          <input type="search" value={props.search} onChange={(e) => props.setSearch(e.target.value)} placeholder="Search for an anime..." required />
        </form>
      </div>
      <div className="anime-list">
        {props.animeList.map((anime) => (
          <AnimeCard key={anime.mal_id} {...anime} />
        ))}
      </div>
    </main>
  );
}

export default MainContent;
