import React from "react";

function AnimeCard({ title, image_url, url }) {
  return (
    <article className="anime-card">
      <a href={url} target="_blank" rel="noreferrer">
        <figure>
          <img src={image_url} alt={title} />
        </figure>
        <h3>{title}</h3>
      </a>
    </article>
  );
}

export default AnimeCard;
