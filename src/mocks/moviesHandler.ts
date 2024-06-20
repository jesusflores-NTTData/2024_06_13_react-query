import { delay, http, HttpResponse } from "msw";
import { Movie } from "../domain/model/Movie";

export const movies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    releaseYear: 2010,
    genres: ["Action", "Sci-Fi"],
    cursor: 0,
  },
  {
    id: 2,
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    releaseYear: 2010,
    genres: ["Action", "Sci-Fi"],
    cursor: 1,
  },
  {
    id: 3,
    title: "Interstellar",
    director: "Christopher Nolan",
    releaseYear: 2014,
    genres: ["Adventure", "Drama", "Sci-Fi"],
    cursor: 2,
  },
  {
    id: 4,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    releaseYear: 1972,
    genres: ["Crime", "Drama"],
    cursor: 3,
  },
  {
    id: 5,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    releaseYear: 1994,
    genres: ["Crime", "Drama"],
    cursor: 4,
  },
];

let failCount = 0;

export const moviesHandler = [
  http.get(`*/api/Movie/:title`, async (req) => {
    const { title } = req.params;

    failCount--;

    await delay(1500);

    if (failCount + 1 <= 0) {
      const results = movies.filter(
        (movie) => movie.title.toLowerCase() === (title as string).toLowerCase()
      );
      return HttpResponse.json(results[0]);
    }
    return getError();
  }),
  http.get(`*/api/Movies/ReleaseYear/:releaseYear`, async (req) => {
    const { releaseYear } = req.params;

    const parsedReleaseYear = parseInt(releaseYear as string);

    failCount--;

    await delay(1500);

    if (failCount + 1 <= 0) {
      const results = movies.filter(
        (movie) => movie.releaseYear === parsedReleaseYear
      );
      return HttpResponse.json(results);
    }
    return getError();
  }),
  http.get(`*/api/Movies/:cursor`, async (req) => {
    const { cursor } = req.params;

    const start = parseInt(cursor as string);
    const end = start + 2;

    const nextCursor = end < movies.length ? end : null;

    const result = movies.slice(start, end);

    failCount--;

    await delay(1500);

    if (failCount + 1 <= 0) {
      return HttpResponse.json({ data: [...result], nextCursor });
    }
    return getError();
  }),
];

function getError(code = 500, message = "server error") {
  return new HttpResponse(message, { status: code });
}
