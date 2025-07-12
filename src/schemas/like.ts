export interface LikeRequest {
    book_id: string;
    user_id: string;
}

export interface LikeResponse {
    id: string;
    count: number;
    book_id: string;
    user_id: string;
    created_at: string;
}