import React, { useState, useEffect } from "react";
import { Movie } from "../../domain/model/Movie";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        ...styles.card,
        ...styles.fadeIn,
        ...(isFadingOut ? styles.fadeOut : {}),
      }}
    >
      <h2>{movie.title}</h2>
      <p>
        <strong>Director:</strong> {movie.director}
      </p>
      <p>
        <strong>Release Year:</strong> {movie.releaseYear}
      </p>
      <p>
        <strong>Genres:</strong> {movie.genres.join(", ")}
      </p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    width: "300px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  fadeIn: {
    opacity: "0",
    transform: "scale(0.9)",
  },
  fadeOut: {
    opacity: "1",
    transform: "scale(1)",
    transition: "opacity 0.5s, transform 0.5s",
  },
};

export default MovieCard;
