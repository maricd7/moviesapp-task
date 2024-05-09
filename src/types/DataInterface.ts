import {  Dispatch, SetStateAction} from 'react'
export interface DataInterface {
    id: number;
    name: string;
    image: string;
    description: string;
    original_title:string;
    poster_path:string;
    title:string;
    overview:string;
    vote_average:number;
}
export interface MovieContextType {
    data: DataInterface[];
    setTab: (tab: string) => void;
    tab: string;
    type: string;
    setData: (data: DataInterface[]) => void;
    setType: (type: string) => void;
    getMovies: () => void;
    getShows: () => void;
    searchMovies: (keywordSearch: string) => void;
    searchShows: (keywordSearch: string) => void;
    keywordSearch: string;
    setKeywordSearch: (param: string) => void;
    details: object;
    setDetails: Dispatch<SetStateAction<object>>;
  }