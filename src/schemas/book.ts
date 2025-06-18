export interface BookRequest {
    genre_id: string;
    title: string;
    author: string;
    genres: string;
    description: string;
    note: number; // Imagino que a nota não é opcional, pois sempre irá retornar um número entre 0 e 5(estrelas)
    image_path?: string; // A interrogação indica que é opcional.
}

export interface BookResponse {
    id: string;
    title: string;
    author: string;
    genres: string;
    description: string;
    note: number;
    image_path?: string;
}