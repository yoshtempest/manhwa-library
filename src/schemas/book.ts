import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { GenreResponse } from "./genre";


/**
 * BookRequest Schema Attributes:
 * - title: string
 * - author: string
 * - description: string
 * - note: number
 * - image_path: string | StaticImport
 * - likes: Array<number>
 * - genres: Array<string> // Array of genre IDs
*/
export interface BookRequest {
    title: string;
    author: string;
    description: string;
    note: number;
    image_path: string | StaticImport;
    likes: Array<number>;
    genres: Array<string>; // Array de IDs de gêneros
}

/**
 * BookResponse Schema Attributes:
 * - id: string
 * - title: string
 * - author: string
 * - genres: Array<GenreResponse>
 * - is_favorite: boolean
 * - description: string
 * - note: number
 * - image_path?: string
*/
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