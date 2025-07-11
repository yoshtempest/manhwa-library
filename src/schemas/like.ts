export interface LikeRequest {
    book_id: string;
    user_id: string;
}

export interface LikeResponse {
    id: string;
    book_id: string;
    user_id: string;
    created_at: string;
}