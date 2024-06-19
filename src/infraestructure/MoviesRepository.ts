import { Movie } from "../domain/model/Movie";

const BASE_URL = "https://www.react-query-mocks.com";

export async function fetchMovieByTitle(title: string): Promise<Movie> {
  const result = await fetch(`${BASE_URL}/api/Movie/${title}`);
  if (result.status === 200) {
    const results = result.json();
    return results;
  }
  throw new Error("STATUS: " + result.status);
}

export async function fetchMoviesByReleaseYear(
  releaseYear: number
): Promise<Movie> {
  const result = await fetch(
    `${BASE_URL}/api/Movies/ReleaseYear/${releaseYear}`
  );
  if (result.status === 200) {
    const results = result.json();
    return results;
  }
  throw new Error("STATUS: " + result.status);
}
