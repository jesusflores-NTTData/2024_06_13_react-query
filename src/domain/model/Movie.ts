export interface Movie {
  id: number;
  title: string;
  director: string;
  releaseYear: number;
  genres: string[];
  cursor?: number;
}
