export interface GenreRequest {
    name: string;
}

export interface GenreResponse {
    id: string;
    name: string;
    created_at: string; // ISO string
    updated_at: string; // ISO string
}