import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { GenreResponse } from "./genre";

export interface BookRequest {
    title: string;
    author: string;
    description: string;
    note: number; // Imagino que a nota não é opcional, pois sempre irá retornar um número entre 0 e 5(estrelas)
    image_path: string | StaticImport;
    likes: Array<number>;
    genres: Array<string>; // Array de IDs de gêneros
}

export interface BookResponse {
    id: string;
    title: string;
    author: string;
    genres: Array<GenreResponse>;
    is_favorite: boolean;
    description: string;
    note: number;
    image_path?: string;
}