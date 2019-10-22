import { Track } from "./track";

export interface Album {
    tracks : Track[];
    name: string;
    releaseDate: string;
    coverImage: string;
    
}