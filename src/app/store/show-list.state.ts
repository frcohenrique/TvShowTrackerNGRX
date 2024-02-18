export interface IShowListState {
  shows: Array<{
    id: number;
    name: string;
    original_name: string;
    overview: string;
    poster: string;
  }>;
}
