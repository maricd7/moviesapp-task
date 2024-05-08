export interface MovieDetailsInterface  {
    adult: boolean;
    backdrop_path: string
    belongs_to_collection: null | object;
    budget: number;
    genres: Genre[];
    homepage: string | null;
    id: number;
    imdb_id: string | null;
    original_language: string;
    original_title: string;
    original_name:string;
    overview: string 
    popularity: number;
    poster_path: string | null;
    release_date: string;
    revenue: number;
    runtime: number | null;
    status: string;
    tagline: string | null;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    text:string;
    name:string;
  }
  export interface Genre {
    name: string;
  }