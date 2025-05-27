export interface UserRequest {
    username: string;
    email: string;
    password: string;
}

export interface UserLogin {
    email: string;
    password: string;
}

export interface UserResponse {
    id: number;
    username: string;
    email: string;
    active: boolean;
    created_at: string;
    updated_at: string;
}